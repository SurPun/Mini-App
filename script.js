// Displays Logo Path
document.querySelector("#logo").addEventListener("change", function () {
  // Regex to format Fig Path
  const logoName = this.value.replace(/^.*\\/, "");

  // Display FileName
  document.getElementById("display-logo").innerHTML = logoName;

  // Store to Storage
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("recent-logo", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
});

// function getColour() {
//   console.log(document.getElementById("colour-select").value);
// }
