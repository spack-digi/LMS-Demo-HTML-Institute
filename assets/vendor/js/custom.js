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

// class toggle section

function toggleSection() {
  var singleSection = document.getElementById("singleSection");
  var multipleSection = document.getElementById("multiSection");
  var selectedValue = document.querySelector(
    `input[name="collapsible-payment"]:checked`
  ).value;

  if (selectedValue === "single") {
    singleSection.style.display = "block";
    multipleSection.style.display = "none";
  } else {
    singleSection.style.display = "none";
    multiSection.style.display = "block";
  }
}
