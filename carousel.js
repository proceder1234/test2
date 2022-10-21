$('.devices_carousel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          customPaging : function(slider, i) {
            return '<a href="#"><img src="img/mobile/dot.png" /><img src="img/mobile/activeDot.png" /></a>';
          },
          arrows: true,
          prevArrow:"<img class='a-left control-c prev slick-prev' src='img/past_arrow.png' />",
          nextArrow:"<img class='a-right control-c next slick-next' src='img/next_arrow.png' />"
        }
      }
    ]
  });