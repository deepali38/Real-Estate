const togglebutton = document.getElementById('toggleButton');
const navList = document.getElementById('nav-list');
togglebutton.addEventListener('click', () => {
navList.classList.toggle('active');
})

$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4.2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<img class='a-left control-c prev slick-prev' src='assests/arrowleft.png'>",
  nextArrow: "<img class='a-right control-c next slick-next' src='assests/arrow.png'>",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4.25,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3.2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 587,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
