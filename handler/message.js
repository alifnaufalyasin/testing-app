const { sendMail } = require("../module/mail");
const { fileExec } = require("../module/imageHandler");


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
    
      default:
        Context.sendText('oke')
        break;
    }
    
  }
}


module.exports = {
  handleMessage
};