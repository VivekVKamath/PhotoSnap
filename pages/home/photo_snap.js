// Get the button that opens the modal
let btn = document.getElementById("mobile_button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
function openModal() {
    if(btn == null) return
    btn.classList.add("active");
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    btn.classList.remove("active");
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }