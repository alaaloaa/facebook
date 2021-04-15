/*==============btn slider left==========*/
function w3_close() {
   document.getElementById("mySidebar").style.display = "none";
}

$(document).ready(function(){
    $(".close-slider").click(function(){
        $("#mySidebar").hide();
    });
});

$(document).ready(function(){
    $("#btn-slider").click(function(){
        $("#mySidebar").toggle();
    });
});


/*==============btn slider right==========*/
$(document).ready(function(){
    $("#btn-slider-right").click(function(){
        $("#mySidebar-right").toggle();
    });
});

function w3_close() {
   document.getElementById("mySidebar-right").style.display = "none";
}

//========= hide and show classes ============//

$(document).ready(function(){
    $("#edit").hide();
});

$(document).ready(function(){
    $("#explore").on({
        mouseenter: function(){
            $("#edit").show();
        },
        mouseleave: function(){
            $("#edit").hide();
        } 
        
})});

function hide(){
    $(document).ready(function(){
    $("#btn-close").click(function(){
        $("#mySidebar").hide();
    });
});
};








  

    
 $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
          navigation : true,
         items: 4,
          pagination:false,
          rewindNav:false,
          navigationText:['<i class=" 	fa fa-chevron-left btn-left tx-white">','<i class=" 	fa fa-chevron-right btn-right">'],
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [700,5],
          itemsTablet: [768,6],//2 items between 600 and 0
          itemsMobile : [450,4], // itemsMobile disabled - inherit from itemsTablet option
         
      });
     
    });


/*==============active buttons ==========*/


