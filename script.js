// Displays Logo Path
function getIcon(logo) {
  // Regex to format Fig Path
  const logoName = logo.replace(/^.*\\/, "");

  document.getElementById("display-logo").innerHTML = logoName;
}
