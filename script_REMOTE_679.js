// Get the modal
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img1 = document.getElementById("myImg1");
const modalImg1 = document.getElementById("img01");
const img2 = document.getElementById("myImg2");
const modalImg2 = document.getElementById("img02");
/*  var captionText = document.getElementById("caption"); */
img1.onclick = function(){
  modal1.style.display = "flex";
  modalImg1.src = this.src;
}

img2.onclick = function(){
    modal2.style.display = "flex";
    modalImg2.src = this.src;
  }

// Get the <span> element that closes the modal
const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal1.style.display = "none";
}

span2.onclick = function() { 
    modal2.style.display = "none";
  }