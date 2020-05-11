const { handleMessage } = require("./handler/message");

module.exports = async function App(context) {
  if (context.event.isPosback){
  }else{
    return handleMessage(context);
  }
}