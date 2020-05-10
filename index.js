const { handleMessage } = require("./handler/message");
const { dbinit } = require("./module/db");

module.exports = async function App(context) {
  dbinit()
  
  if (context.event.isPosback){
  }else{
    return handleMessage(context);
  }
}