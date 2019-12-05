var message = [
    'Hi there, I\'m Robo-bot and you?',
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    'That\'s awesome',
    'Do you have a favorite color?',
    'That\'s a good color choice.',
    'I think you\'re a nice person',
    'Why do you think that?',
    'What is your favorite animal?',
    'Awesome! I like sloths',
    'Anyway I\'ve gotta go now',
    'It was a pleasure chatting with you',
    'Time to make to go talk to others',
    'Bye',
    ':)'
  ]
  
  $(document).ready(function() { 
      setTimeout(function(){
          loader();
          setTimeout(function(){
          $('.container .display .lds-ellipsis').fadeOut(0);
          reply();
         }, 1600) 
      },1000);
   })
  
  var scrollctr = 200;
  var i =0;
  
  function scrollUpdate(){
      lastElementTop = $('.display').position().top ;
      scrollAmount = lastElementTop + scrollctr ;
      scrollctr += 200; 
  $('.display').animate({scrollTop: scrollAmount},700);
  }
  
  function msngr(){
    var msg = $('.text input').val();
    $('.container .display').append("<div class='msg'><p>"+msg+"</p></div>");
    $('.text input').val("");
  }
  function reply(){
      
      
      if(i>=15){i =15; }
      $('.container .display').append("<div class='reply'><p>"+message[i]+"</p></div>");
      i++;
  }
  function loader(){
      $('.container .display').append("<div class='lds-ellipsis'><div></div><div></div><div></div><div></div></div>");
  }
  
  
  $('.tray .fa-paper-plane').click(msngr);
  $(document).on('keypress',function(e) {
      if(e.which == 13) {
          e.preventDefault();
          msngr();
          scrollUpdate();
      }
  });
  
  
  
  $('.tray .fa-paper-plane').click(function(){
      setTimeout(function(){
          scrollUpdate();
          loader();
          setTimeout(function(){
          $('.container .display .lds-ellipsis').fadeOut(0);
          reply();
          scrollUpdate();
         }, 1600) 
      },1000);
  });
  $(document).on('keypress',function(e) {
      if(e.which == 13) {
          e.preventDefault();
          setTimeout(function(){
          scrollUpdate();
          loader();
          setTimeout(function(){
          $('.container .display .lds-ellipsis').fadeOut(0);
          reply();
          scrollUpdate();
         }, 1600) 
      },1000);
  }
  });
  
  