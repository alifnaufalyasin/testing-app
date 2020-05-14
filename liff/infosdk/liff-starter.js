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
        window.location = "./infosdk.html"
    })
    .catch(err => {
      window.location = "./"
    });
}