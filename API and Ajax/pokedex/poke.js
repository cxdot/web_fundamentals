
	// $(document).ready(function(){
	//  	 for( i=1; i<=151; i++){
	//  		// alert('Gotta catch them all!');
	//  		 var first = "http://pokeapi.co/media/img/"+i+".png";
	//  		$('#wrapper').append("<div></div>");
	//  		$('div :last-child').addClass("image")
	//  		$('.image:last-child').css('background-image', 'url('+first+')')
	//       }
	// })


	$(document).ready(function(){
	 	 for( i=1; i<=151; i++){
	 		
	 		var first = "http://pokeapi.co/media/img/"+i+".png";
	 		$('#images').append('<img src="'+first+'">');
	 		$('#images :last-child').attr("alt",i);

	      }

	      $('img').on("click",function(){
	      	var curr = $(this).attr("alt");
	      	var image = $(this).attr("src");
	      	
	      	$.get('http://pokeapi.co/api/v1/pokemon/'+curr+'/',function(res){

	      	$('#dex').html('<h2>'+res.name+'</h2>');
	      	$('#dex').append('<img src="'+image+'">');
	      	// $('#dex').append('<h3>Type</h3><p>'+res.type+)
	      	var html_str = "";
            html_str += "<h4>Types</h4>";
            html_str += "<ul>"; 
            
            for(var i = 0; i < res.types.length; i++) {
            	html_str += "<li>" + res.types[i].name + "</li>";
                }
                html_str += "</ul>";
                $("#dex").append(html_str);
            $('#dex').append('<h4>Height</h4><p>'+res.height+'</p>');   
            $('#dex').append('<h4>Weight</h4><p>'+res.weight+'</p>')
	      	console.log(res);
			

	      	},"json")

	      
	      })


	  });
