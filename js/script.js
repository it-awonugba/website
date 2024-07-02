document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("utcTime").innerText = utcTime;
    document.getElementById("currentDay").innerText = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
