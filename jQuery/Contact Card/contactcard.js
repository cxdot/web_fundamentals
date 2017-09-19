// $(document).ready(function(){
// $('#btn').on("click", function(){

//     var first = $('#first').val();
//     var last = $('#last').val();
//     var desc = $('#desc').val();
    
//     $('form').append('<div id="card"><h1> '+first+' '+last+' <p id="toggle">Click for description!<p></div>') 
//     return false;
// });
// $(document).on('click', 'p', function(){
//     $('p').toggle(desc);
// });

// });



$(document).ready(function(){
$('#btn').click(function(){

    var first = $('#first').val();
    var last = $('#last').val();
    var desc = $('#desc').val();
    
    $('form').append('<div id="card"><p> '+first+' '+last+' </p><p id="cliq">Click for description</p><p id="de"> '+desc+' </p></div>') 

    $('#first').val("");
    $('#last').val("");
    $('#desc').val("")
    return false;
});
$(document).on('click', '#cliq', function(){
    $('p').toggle();
});

});
