const cloudinary = require('cloudinary').v2;
const fileType = require('file-type');
const fs = require('fs');

cloudinary.config({ 
  cloud_name: 'aliven', 
  api_key: '968117264369458', 
  api_secret: 'NHi7H3FVpouRYKb59wnsIfvzHWs' 
});

function uploadImage(file) {

  cloudinary.v2.uploader.upload(file, {public_id: "images"}, function(error, result) {
    console.log(result, error)
  });
}



async function fileExec(context) {
  if (context.event.isImage || context.event.isVideo) {
    const buffer = await context.getMessageContent();
    const { ext } = fileType(buffer);
    const profile = await Context.getUserProfile()

    const filename = `../images/${profile.userId}.${ext}`;

    // You can do whatever you want, for example, write buffer into file system
    await fs.promises.writeFile(filename, buffer);

    await uploadImage(filename);
  }
}

module.exports = {
  fileExec
}