
	$(document).ready(function(){
	 	 for( i=1; i<=151; i++){
	 		// alert('Gotta catch them all!');
	 		 var first = "http://pokeapi.co/media/img/"+i+".png";
	 		$('#wrapper').append("<div></div>");
	 		$('div :last-child').addClass("image")
	 		$('.image:last-child').css('background-image', 'url('+first+')')
	      }
	})


	// $(document).ready(function(){
	//  	 for( i=1; i<=151; i++){
	//  		// alert('Gotta catch them all!');
	//  		var first = "http://pokeapi.co/media/img/"+i+".png";
	//  		$('#wrapper').append("<img src="+first+""">");
	//  		// $('img :last-child').attr("src", first);
	//  		// $('.image:last-child').css('background-image', 'url('+first+')')
	//       }
	// })