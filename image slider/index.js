$(document).ready(function(){
  var slideWidth = $('img').width();
  var numSlides = $('img').length;
  var totalWidth = slideWidth * numSlides;
  var currentSlide = 1;

  $('.slider').css('width', totalWidth);

  $('.next').click(function(){
      if (currentSlide < numSlides) {
          currentSlide++;
          var translateValue = -slideWidth * (currentSlide - 1);
          $('.slider').css('transform', 'translateX(' + translateValue + 'px)');
      }
  });

  $('.prev').click(function(){
      if (currentSlide > 1) {
          currentSlide--;
          var translateValue = -slideWidth * (currentSlide - 1);
          $('.slider').css('transform', 'translateX(' + translateValue + 'px)');
      }
  });

  $('.thumbnails img').click(function(){
      var index = $(this).index();
      var translateValue = -slideWidth * index;
      $('.slider').css('transform', 'translateX(' + translateValue + 'px)');
      currentSlide = index + 1;
  });
});
