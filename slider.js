// Image Slider
		var slideIndex = 0;
		showSlides();
		var slides,dots;

		function plusSlides(position) {
		    slideIndex += position;
		    if (slideIndex > slides.length) {slideIndex = 1}
		    else if(slideIndex < 1){slideIndex = slides.length}
		    for (i = 0; i < slides.length; i++) {
		       slides[i].style.display = "none";  
		    }
		    for (i = 0; i < dots.length; i++) {
		        dots[i].className = dots[i].className.replace(" active", "");

		      }
		        slides[slideIndex-1].style.display = "block";  
		        dots[slideIndex-1].className += " active";
		    }

		function currentSlide(index) {
		    if (index > slides.length) {index = 1}
		    else if(index < 1){index = slides.length}
		    for (i = 0; i < slides.length; i++) {
		       slides[i].style.display = "none";  
		    }
		    for (i = 0; i < dots.length; i++) {
		        dots[i].className = dots[i].className.replace(" active", "");
		      }
		        slides[index-1].style.display = "block";  
		        dots[index-1].className += " active";
		    }

		function showSlides() {
		    var i;
		    slides = document.getElementsByClassName("mySlides");
		    dots = document.getElementsByClassName("dot");
		    for (i = 0; i < slides.length; i++) {
		       slides[i].style.display = "none";  
		    }
		    slideIndex++;
		    if (slideIndex> slides.length) {slideIndex = 1}    
		    for (i = 0; i < dots.length; i++) {
		        dots[i].className = dots[i].className.replace(" active", "");
		    }
		    slides[slideIndex-1].style.display = "block";  
		    dots[slideIndex-1].className += " active";
		    setTimeout(showSlides, 4000); 
		}


// Quotes Slider
		var slideIndex2 = 0;
		showSlides2();

		function showSlides2() {
		  var i2;
		  var slides2 = document.getElementsByClassName("mySlides2");
		  var dots2 = document.getElementsByClassName("dot2");
		  for (i2 = 0; i2 < slides2.length; i2++) {
		    slides2[i2].style.display = "none";  
		  }
		  slideIndex2++;
		  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
		  for (i2 = 0; i2 < dots2.length; i2++) {
		    dots2[i2].className = dots2[i2].className.replace(" active2", "");
		  }
		  slides2[slideIndex2-1].style.display = "block";  
		  dots2[slideIndex2-1].className += " active2";
		  setTimeout(showSlides2, 5000); // Change image every 5 seconds
		}