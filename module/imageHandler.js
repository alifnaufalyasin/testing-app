const cloudinary = require('cloudinary').v2;
const fileType = require('file-type');
const fs = require('fs');

cloudinary.config({ 
  cloud_name: 'aliven', 
  api_key: '968117264369458', 
  api_secret: 'NHi7H3FVpouRYKb59wnsIfvzHWs' 
});

function uploadImage(file,name,ext) {

  cloudinary.uploader
  .upload(file, {public_id: 'buktiBayar/'+name, eager: {format: ext}}, function(error, result) {
    console.log(result)
  });
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
    await uploadImage(filename,profile.userId,ext);
    context.sendText('file sudah disimpan')
  }else if (context.event.isVideo){
    await uploadVideo(filename,profile.userId,ext);
    context.sendText('file sudah disimpan')
  }
}

module.exports = {
  fileExec
}