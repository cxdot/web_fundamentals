$(document).ready(function(){
  $('#button').click(function(){
 //getter fucntion gets the value something:
    var buttonAlert = $('#alert').text();
    alert(buttonAlert);
  })

  $('#hide').click(function(){
    $('#main').hide();
  })

  $('#show').click(function(){
    $('#main').show();
  })

  $("#addclass").click(function(){
      $("#left img").addClass("intro");
  })

  $('#slideup').click(function(){
   $('#left img').slideUp();
  })

  $('#slidedown').click(function(){
   $('#left img').slideDown();
 })

  $('#right span').click(function(){
   $('#right p:nth-child(2)').slideToggle("fast");
 });
    
    $('#fadeout').click(function(){
     $("#header").fadeOut("3000");
    });

     $('#fadein').click(function(){
        $('#header').fadeIn(3000);
})
    $("#toggle").click(function(){
        $("h2").toggle();
    })
  $("#before").click(function(){
        $("#box1 p:nth-child(2)").before("<p>jQuery</p>");
    });
    $("#afterr").click(function(){
        $("#box2 p:nth-child(3)").before("<p>Management</p>");
    });
    $("#schedule").click(function(){
        $("a:nth-child(6)").append("<a>Schedule</a>");
    });
    $("#change").click(function(){
        $("#mid p:first-child").html("What did this say before?");
    });
    $("#attr").click(function(){
        alert("Image width: " + $("#main").attr("width"));
    });
    $("#value").click(function(){
        $("#editme").val("What the pho");
    })

    $("#attachdata").click(function(){
        $("#dataa").data("Huh?", "How dafuq this work?!");
    })
    $("#getdata").click(function(){
        alert($("#dataa").data("Huh?"));
    })
});