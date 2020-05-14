// line://app/1654213642-VNkANmPz
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
      document.getElementById("btnSubmit").style.visibility = 'visible'
      document.getElementById("btnSubmit").addEventListener("click", () => {
        // liff.
        liff.closeWindow();
      });
    })
    .catch(err => {
      window.location = "./infosdk.html";
    });
}
