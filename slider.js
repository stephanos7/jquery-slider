$(document).ready(function(){
  console.log("welcome");
  //set options for slider
  var speed = 300;
  var autoswitch = true;    
  var autoswitchSpeed = 2000;

  //add active class
  $('.carousel-img').first().addClass('active');
  //hide all other slides
  $('.carousel-img').hide();
  //show first slide
  $('.active').show();
  //go forwards
  $('#next').on('click', function(){
    $('.active').removeClass('active').addClass('lastActive');
    if($('.lastActive').is(':last-child')){
      $('.carousel-img').first().addClass('active');
    }else{
      $('.lastActive').next().addClass('active');
    }
    $('.lastActive').removeClass('lastActive');
    $('.carousel-img').fadeOut(speed, 'linear');
    $('.active').fadeIn(speed, 'linear');
  })
    $('#prev').on('click', function(){
    $('.active').removeClass('active').addClass('lastActive');
    if($('.lastActive').is(':first-child')){
      $('.carousel-img').last().addClass('active');
    }else{
      $('.lastActive').prev().addClass('active');
    }
    $('.lastActive').removeClass('lastActive');
    $('.carousel-img').fadeOut(speed, 'linear');
    $('.active').fadeIn(speed, 'linear');
  })
});