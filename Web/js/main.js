(() => {

  let icons = document.querySelectorAll(".ducky");

  function logID() {
    console.log("graphic clicked on: ", this.id);
  }

  icons.forEach(ducky => ducky.addEventListener("click", logID));
})();
