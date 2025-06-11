const btn = document.getElementById("downloadBtn");
const progressBar = document.getElementById("downloadProgress");
const progressContainer = document.querySelector(".progress");

btn.addEventListener("click", () => {
  progressContainer.style.display = "block";
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + "%";
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        window.location.href = "zip-files/CH34x_Install_Windows_v3_4.zip";
        progressContainer.style.display = "none";
        progressBar.style.width = "0%";
      }, 500);
    }
  }, 100);
});
