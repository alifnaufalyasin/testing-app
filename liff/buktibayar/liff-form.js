// line://app/1653854295-YW6Jz9gl
require('dotenv').config();
window.onload = function() {
  let myLiffId = process.env.liffBuktiBayar;
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
      if (liff.isInClient()) {
        getProfile();
        document.getElementById("btnSubmit").addEventListener("click", () => {
          liff.closeWindow();
          console.log("window closed");
        });
      } else {
        window.location = "/";
      }
    })
    .catch(err => {
      window.alert(err);
    });
}

const getProfile = async () => {
  document.getElementById("userId").value = "profile.userId";
  await liff
    .getProfile()
    .then(profile => {
      document.getElementById("userId").value = profile.userId;
      document.getElementById("displayNameField").textContent =
        "Hai, " + profile.displayName;
      document.getElementById("btnSubmit").style.visibility = 'visible'
      return profile;
    })
    .catch(e => {
      console.log(e);
    });
};
