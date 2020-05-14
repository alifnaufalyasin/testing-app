require('dotenv').config();
window.onload = function() {
<<<<<<< HEAD
  let myLiffId = process.env.liffBuktiBayar;
=======
  let myLiffId = "1653863954-BnlW2Oyk";
>>>>>>> master
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
        window.location = "./form.html"
    })
    .catch(err => {
      window.alert(err);
    });
}