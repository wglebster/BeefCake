// Get the modal
const page1 = document.getElementById("page1");
/* const page2 = document.getElementById("page2"); */




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == page1) {
    modal.style.display = "none";
  }
}