// show page
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
}

// menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

// scroll to about
function scrollToAbout() {
  showPage("home");
  document.getElementById("about").scrollIntoView();
}

// default page
window.onload = function () {
  showPage("home");
};

// form
function sendMessage() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let s = document.getElementById("subject").value;
  let m = document.getElementById("message").value;

  if (!n || !e || !s || !m) {
    alert("Fill all fields");
    return;
  }

  document.getElementById("success").style.display = "block";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}