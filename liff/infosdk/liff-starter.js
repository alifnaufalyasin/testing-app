window.onload = function() {
  let myLiffId = "1654213642-VNkANmPz";
  initializeLiff(myLiffId);
};

/**
 * Initialize LIFF
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId
    })
    .then(() => {
      if (liff.isInClient()){
        window.location = "./infosdk.html"
      }else{
        window.location = "./done.html"
      }
    })
    .catch(err => {
      window.location = "./"
    });
}