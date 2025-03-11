document.getElementById("selectType").addEventListener("change", function () {
  document.getElementById("textInput").classList.add("d-none");
  document.getElementById("linkInput").classList.add("d-none");
  document.getElementById("fileInput").classList.add("d-none");

  if (this.value === "text") {
    document.getElementById("textInput").classList.remove("d-none");
  } else if (this.value === "link") {
    document.getElementById("linkInput").classList.remove("d-none");
  } else if (this.value === "file") {
    document.getElementById("fileInput").classList.remove("d-none");
  }
});

