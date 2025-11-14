const onvid = document.getElementById("onvid");
const invid = document.getElementById("invid");
const mvid = document.getElementById("mvid");

window.onload = openvid()


function openvid() {
  invid.classList.add("invid-on");
  onvid.style.display = "none";
  mvid.style.display = "block";

  setTimeout(() => {
    invid.classList.remove("invid-on");
    onvid.style.display = "flex";
    mvid.style.display = "none";
  }, 5200);

  const loadingText = document.getElementById("loadingText");
  let percentage = 0;

  function updatePercentage() {
    if (percentage < 100) {
      percentage += Math.random() * 3;
      if (percentage > 100) percentage = 100;

      loadingText.textContent = `Video yuklanmoqda... ${Math.floor(
        percentage
      )}%`;
      setTimeout(updatePercentage, 30 + Math.random() * 40);
    } else {
      loadingText.textContent = "Video yuklanmoqda...100%";
    }
  }

  updatePercentage();
}