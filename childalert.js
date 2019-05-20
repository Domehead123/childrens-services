$( document ).ready(function() {
    
    $(".priority1").click(function(){
            $("#alert1").show();
            
          $(".priority1").removeClass("redalert");
          $(".priority2").removeClass("orangealert");
          $(".priority3").removeClass("pinkalert");
          
          $(this).addClass("redalert");
    
  $(".alert").not($("#alert1")).hide();

    

});


    $(".priority2").click(function(){
           $(".priority1").removeClass("redalert");
          $(".priority2").removeClass("orangealert");
          $(".priority3").removeClass("pinkalert");
          $(this).addClass("orangealert");
    
   $("#alert2").show();
     $(".alert").not($("#alert2")).hide();
    

});



    $(".priority3").click(function(){
           $(".priority1").removeClass("redalert");
          $(".priority2").removeClass("orangealert");
          $(".priority3").removeClass("pinkalert");
          $(this).addClass("pinkalert");
    
   $("#alert3").show();
    $(".alert").not($("#alert3")).hide();
    

});


});



    