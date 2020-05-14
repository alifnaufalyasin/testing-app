require('dotenv').config();
window.onload = () => {
  let myLiffId = process.env.liffDetailPesanan;
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
      document.getElementById("test").value = "FORM"
      // window.location = "./form.html"
    })
    .catch(err => {
      document.getElementById("test").value = "cast"
      // window.location = "./"
    });
}