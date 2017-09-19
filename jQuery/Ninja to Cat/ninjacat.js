$(document).ready(function(){
//only switches once
// $('#1').on({'click': function(){
//         $('#1').attr('src','https://image.ibb.co/caqo0v/cat0.png');}
// });

// $('#2').on({'click': function(){
//         $('#2').attr('src','https://image.ibb.co/hU0o0v/cat1.png');}
// });

// $('#3').on({'click': function(){
//         $('#3').attr('src','https://image.ibb.co/iPY80v/cat2.png');}
// });

// $('#4').on({'click': function(){
//         $('#4').attr('src','https://image.ibb.co/nHoK7a/cat3.png');}
// });

// $('#5').on({'click': function(){
//         $('#5').attr('src','https://image.ibb.co/nJactF/cat4.png');}
// });



$("#1").click(function() {
   if (this.src == 'https://image.ibb.co/faO80v/ninja0.png')
      this.src = 'https://image.ibb.co/caqo0v/cat0.png';
   else
      this.src = 'https://image.ibb.co/faO80v/ninja0.png';
});

$("#2").click(function() {
   if (this.src == 'https://image.ibb.co/dK4Rna/ninja1.png')
      this.src = 'https://image.ibb.co/hU0o0v/cat1.png';
   else
      this.src = 'https://image.ibb.co/dK4Rna/ninja1.png';
});

$("#3").click(function() {
   if (this.src == 'https://image.ibb.co/gvwHtF/ninja2.png')
      this.src = 'https://image.ibb.co/iPY80v/cat2.png';
   else
      this.src = 'https://image.ibb.co/gvwHtF/ninja2.png';
});

$("#4").click(function() {
   if (this.src == 'https://image.ibb.co/mpvADF/ninja3.png')
      this.src = 'https://image.ibb.co/nHoK7a/cat3.png';
   else
      this.src = 'https://image.ibb.co/mpvADF/ninja3.png';
});

$("#5").click(function() {
   if (this.src == 'https://image.ibb.co/bKhCSa/ninja4.png')
      this.src = 'https://image.ibb.co/nJactF/cat4.png';
   else
      this.src = 'https://image.ibb.co/bKhCSa/ninja4.png';
});

})