// API CODE STARTS HERE
(async function fetchImg() {

   let imgList = await fetch('https://picsum.photos/v2/list'); // API URL
   
   if (imgList.ok) {
      let json = await imgList.json(); // API Response OBject

     
      for (i = 0; i < 10; i++) {
         const maindiv = document.getElementById("slide-wrap");
         const innerdiv = document.createElement('div');
         let img =document.createElement('img');
         img.src = json[i].download_url
         maindiv.appendChild(innerdiv);
         innerdiv.appendChild(img);
      }
   }
   else {
      alert("HTTP-Error: " + response.status);
   }
   


   setTimeout(function () {
      var slides = document.querySelector('.slider-items').children;
      var slidenext = document.querySelector(".arrow-right");
      var slideprev = document.querySelector(".arrow-left");
      var totalSlides = slides.length;
   
      var current = 0;
      slides[current].classList.add("active");
      
      slidenext.onclick = function () {
         next("next");
      }
      slideprev.onclick = function () {
         next("prev");
      }
      
      function next(addlements) {
         if (addlements == "next") {
            current++;
            if (current == totalSlides) {
               current = 0;
            }
         }
      
         else if(current == 0) {
               current = totalSlides - 1;
                    }
         else {
            current--;
         }
         for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
         }
      
         slides[current].classList.add("active");
      
          
      }
      
   }, 300);

})();











