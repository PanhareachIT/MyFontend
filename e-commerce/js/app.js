const ham = document.querySelector(".hambugur");
const res = document.querySelector(".responsive")
ham.addEventListener("click", () =>{
   res.classList.toggle("active");
})


var images = document.getElementById("main");
      var sub = document.getElementsByClassName("sub");
      sub[0].addEventListener("click", () => {
        images.src = sub[0].src.toString();
      });

      sub[1].addEventListener("click", () => {
        images.src = sub[1].src.toString();
        // sub[1].src = images[0].src.toString();
      });

      sub[2].addEventListener("click", () => {
        // images[0].src = sub[2].scr.toString();
        images.src = sub[2].src.toString();
      });

      sub[3].addEventListener("click", () => {
        images.src = sub[3].src.toString();
        // sub[3].src = images[0].src.toString();
      });