// Get the modal
var modal = document.getElementById("myModal");

// Get the image and the modal element that displays the enlarged image
var images = document.getElementsByClassName("image");
var modalImage = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Recorrer todas las imágenes y asignar el evento click
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalImage.src = this.getElementsByTagName("img")[0].src;
    captionText.innerHTML = this.getElementsByTagName("img")[0].alt;
  });
}

// Get the span element that closes the modal
var closeSpan = document.getElementsByClassName("close")[0];

// Assign the click event to the span element to close the modal
closeSpan.addEventListener("click", function () {
  modal.style.display = "none";
});

// Assign the click event to the modal to close it if clicked outside the expanded image
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
