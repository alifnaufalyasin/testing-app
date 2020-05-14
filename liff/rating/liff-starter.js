window.onload = function() {
  let myLiffId = "1653863954-DN7KOW1b";
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
        window.location = "./rating.html"
    })
    .catch(err => {
      window.location = "./"
    });
}