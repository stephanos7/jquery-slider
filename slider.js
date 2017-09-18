$(document).ready(function(){
  console.log("welcome");
  //set options for slider
  var speed = 450;
  var autoswitch = true;    
  var autoswitchSpeed = 2000;

  //add active class
  $('.carousel-img').first().addClass('active');
  //hide all other slides
  $('.carousel-img').hide();
  //show first slide
  $('.active').show();
  //go forwards
  $('#next').on('click', goBackwards); 
  $('#prev').on('click', goForwards);

    if(autoswitch === true){
    setInterval(goForwards, autoswitchSpeed)
  }


  function goBackwards(){
    $('.active').removeClass('active').addClass('lastActive');
    if($('.lastActive').is(':last-child')){
      $('.carousel-img').first().addClass('active');
    }else{
      $('.lastActive').next().addClass('active');
    }
    $('.lastActive').removeClass('lastActive');
    $('.carousel-img').fadeOut(speed, 'linear');
    $('.active').fadeIn(speed, 'linear');
  }

  function goForwards(){
    $('.active').removeClass('active').addClass('lastActive');
    if($('.lastActive').is(':first-child')){
      $('.carousel-img').last().addClass('active');
    }else{
      $('.lastActive').prev().addClass('active');
    }
    $('.lastActive').removeClass('lastActive');
    $('.carousel-img').fadeOut(speed, 'linear');
    $('.active').fadeIn(speed, 'linear');
  }

});