const cloudinary = require('cloudinary').v2;
const fileType = require('file-type');
const fs = require('fs');

cloudinary.config({ 
  cloud_name: 'aliven', 
  api_key: '968117264369458', 
  api_secret: 'NHi7H3FVpouRYKb59wnsIfvzHWs' 
});

async function uploadImage(file,name,ext) {
  const url = await cloudinary.uploader
  .upload(file, {public_id: 'buktiBayar/'+name, eager: {format: ext}});
  return url
}
function uploadVideo(file,name,ext) {

  cloudinary.uploader
  .upload(file, { resource_type: "video", public_id: "video/"+name, chunk_size: 6000000},function(error, result) {
    console.log(result)
  });
}
  


async function fileExec(context) {
  const buffer = await context.getMessageContent();
  const { ext } = await fileType.fromBuffer(buffer);
  console.log(ext)  
  const profile = await context.getUserProfile()

  const filename = `images/${profile.userId}.${ext}`;

  // You can do whatever you want, for example, write buffer into file system
  await fs.promises.writeFile(filename, buffer);

  if (context.event.isImage ) {
    const url = await uploadImage(filename,profile.userId,ext);
    console.log(url.secure_url)
    context.sendText('file sudah disimpan di '+ url.secure_url)
  }else if (context.event.isVideo){
    await uploadVideo(filename,profile.userId,ext);
    context.sendText('file sudah disimpan')
  }else{
    context.sendText('aku tidak tahu apa yang kamu kirim')
  }

  await fs.unlink(filename,function(err){
    if(err) return console.log(err);
    console.log('file deleted successfully');
});  
}

async function getImage(userId) {
  const url = await cloudinary.api.resource('buktiBayar/'+userId)
  console.log(url.secure_url);
  return url.secure_url  
}

async function getImageOption(userId,option) {
  return await cloudinary.url('buktiBayar/'+userId+'.png',option)
}

module.exports = {
  fileExec, 
  getImage,
  getImageOption
}