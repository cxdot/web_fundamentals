$(document).ready(function(){
    $('form').on('submit', function(){
    //   alert($('#first').val());
      var first = $('#first').val()
      
      
    //  alert($('#last').val());
      var last = $('#last').val()

    // alert($('#email').val());
      var email = $('#email').val()

    //   alert($('#contact').val());
      var phone = $('#contact').val()
      
      

    //   works too
    // $('table').append('<tr><td> '+first+' </td> <td> '+last+' </td> <td> '+email+' </td> <td> '+phone+' </td></tr> ' );
     
     




      $('table').append('<td> '+first+' </td>');
      $('table').append('<td> '+last+' </td>');
      $('table').append('<td> '+email+' </td>');
      $('table').append('<td> '+phone+' </td>');
      return false;

    });
});   
 








