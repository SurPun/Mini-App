// Displays Logo Path
document.querySelector("#logo").addEventListener("change", function () {
  // Regex to format Fig Path
  var logoName = this.value.replace(/^.*\\/, "");

  // Display FileName
  document.getElementById("display-logo-name").innerHTML = logoName;

  // Store to Storage
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    sessionStorage.setItem("recent-logo", reader.result);
    sessionStorage.setItem("logo-name", logoName);
  });

  reader.readAsDataURL(this.files[0]);
});

function clearStorage() {
  sessionStorage.clear();
  window.location.reload();
}

function saveData() {
  const category = document.getElementById("category-name");
  const colour = document.getElementById("colour-select");

  sessionStorage.setItem("category", category.value);
  sessionStorage.setItem("colour", colour.value);
}

// Display List
const displayList = document.querySelector(".list-container");

for (let i = 0; i < 20; i++) {
  const logoName = sessionStorage.getItem("logo-name");
  const categoryData = sessionStorage.getItem("category");
  const colourData = sessionStorage.getItem("colour");

  if (categoryData) {
    displayList.innerHTML = `
    <h2><a href="/results.html?category=${categoryData}&logo=${logoName}&colour=${colourData}">${categoryData}</a></h2>
    <button class="delBtn" onclick="clearStorage()">Delete</button>
    <span></span>
    `;
  }
}
