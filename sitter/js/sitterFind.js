

$(function() {
    $(".sitterSelBtn").click(function() {
      $(".modal").fadeIn();
      $(".container").css("pointer-events", "none")
      $("body").css("background-color", "lightgray")
    });
    
    $(".modalX").click(function() {
      $(".modal").fadeOut();
      $(".container").css("pointer-events", "auto")
          $("body").css("background-color", "white")
    });
    
  });

  

  function openModal(modalname){
    $("#modal").fadeIn(300);
    $("."+modalname).fadeIn(300);
  }
  
  $("#modal, .close").on('click',function(){
    $("#modal").fadeOut(300);
    $(".modal-con").fadeOut(300);
  });
  
  
  $('.mon').click(function() {
  
    $(this).css("background-color", "orange")
    // $(this).addClass('day');
    // $(this).removeClass();
  
  });