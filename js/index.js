document.getElementById("year").innerHTML = new Date().getFullYear();

const changeSlideView = (slide) => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


const mql = window.matchMedia("(max-width: 992px)");

const handleOrientationChange = (e) => {
  if (e.matches) {
    changeSlideView(1)
  } else {
    changeSlideView(3)
  }
}

handleOrientationChange(mql);

mql.onchange = (e) => {
  handleOrientationChange(e)
}

//use window.scrollY
var scrollpos = window.scrollY;
var header = document.getElementById("navbar");

function add_class_on_scroll() {
    header.classList.add("navbar-small");
}

function remove_class_on_scroll() {
    header.classList.remove("navbar-small");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 80){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});