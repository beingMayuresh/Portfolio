$(document).ready(function() {
    $("#single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });

    $("#single_2").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'elastic',

        helpers : {
            title : {
                type : 'inside'
            }
        }
    });

    $("#single_3").fancybox({
        openEffect : 'none',
        closeEffect : 'none',
        helpers : {
            title : {
                type : 'outside'
            }
        }
    });

    $("#single_4").fancybox({
        helpers : {
            title : {
                type : 'over'
            }
        }
    });

    $("#test0").addClass("animated bounceInLeft");
     $("#test1").addClass("animated bounceInRight");
      $("#test2").addClass("animated bounceInLeft");
       $("#test3").addClass("animated bounceInRight");
        $("#test4").addClass("animated bounceInLeft");
         $("#test5").addClass("animated bounceInRight");
         $("#test6").addClass("animated bounceInLeft");

});





    



