const { sendMail } = require("../module/mail");
const { fileExec, getImage } = require("../module/imageHandler");
const { snk } = require("../Flex/snk");
const { admindb, fbdb } = require("../utils/fb");


async function handleMessage(Context) {
  const message = Context.event.message;
  let profileUser = await Context.getUserProfile()
  let userId = profileUser.userId;
  // console.log(profileUser);
  if (message.type !== "text") {
    // Context.reply([{
    //   type: "text",
    //   text: "Kakak ngirim apa? aku gabisa liat :( "
    // }]);
    await fileExec(Context)
  } else {
    switch (message.text.toLowerCase()) {
      case 'hello':
        Context.sendText('hello juga')
        break;
      case 'selamat pagi':
        sendMail()
        Context.sendText('pagi juga')
        break;
      case 'test':
        Context.sendFlex("Syarat dan Ketentuan",snk)
        break;
      case 'my photo':
        const url = await getImage(userId)
        Context.sendImage({
          originalContentUrl: url,
          previewImageUrl: url,
        });
        break;
      case 'one':
        admindb.child(userId)
        .update({
          text: 'test aja'
        })
        break;
      case 'two':
        const data = fbdb.collection('testing').doc(userId)
        const add = data.set({
          text: 'ayeyyeye'
        })
        break;
      default:
        Context.sendText('oke')
        break;
    }
    
  }
}


module.exports = {
  handleMessage
};