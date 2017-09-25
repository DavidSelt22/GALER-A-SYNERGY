var sliderNow = 0; // Variable para ver en que slide estamos
var sliderCount = 7; // Cantidad de slides
var intervalo = 3000; // Intervalo de tiempo en que cambia de slide

$(document).ready(function(){
    
   setInterval(slider, intervalo);
  
    
  var flag = false;
	var scroll;
    
    
     $(window).scroll(function(){
         
         scroll = $(window).scrollTop();
         if( scroll > 90 ){
              if(!flag){
                  
             $('header').css({
				
                "height": "87px" 
				
              });
				flag=true;
              
             
             
              $('#logotipo').css({
				 /* "padding-top": "30px",*/
                 "background-size": "80%",
                 "height": "87px"
                  
				
              });
				flag=true;
              
              $('.menu').css({
				   "top": "87px",
                  "padding-top": "2px"
                 			
              });
				flag=true;
              /*
               $('.menu a').css({
				    "margin-bottom":"5px" 
						
               });
                flag=true;
                */  
              $('header label').css({
				  "margin-top":"27px",
                  "font-size": "27px"
                 			
              });
				flag=true;
                  
               $('#flecha-up').css({
				        "display": "block",
                        "background-color": "#fff",
                      
                 			
              });
				flag=true;
                  
            }  
        
             
         }else{
                 if(flag){
                 $(' header').css({
						
                        "height": "102px"
						
					});
					flag=false;
                 
                 
                 
                 $('#logotipo').css({
						/*"padding-top": "0px",*/
						"background-size": "100%",
                        "height": "100px"
                    
					});
					flag=false;
                     
                  
                 $('.menu').css({
						"top": "102px",
                        "padding-top": "5px"
						
					});
					flag=false;
                    /* 
                  $('.menu a').css({
						"margin-bottom":"0px" 
						
					});
					flag=false;*/
                    
                 $('header label').css({
				        "margin-top":"35px",
                        "font-size": "29px"
                 			
                   });
				  flag=false;
                 
                  $('#flecha-up').css({
				        "display": "none",
                        "background-color": "none",
                        
                 			
                   });
				  flag=false;
                     
              }
            }
             
        
         
         
     });
    /*---------------------Funcion de deslizamiento-------------------*/
    
    $("#sn").click(function () {
   
    $('html,body').animate({
        scrollTop: $("#nos").offset().top
    }, 2000);
});
    $("#cont").click(function () {
   
    $('html,body').animate({
        scrollTop: $("#contacto2").offset().top
    }, 2000);
});
    
    $('#flecha-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#flecha-up').fadeIn();
		} else {
			$('#flecha-up').fadeOut();
		}
	});
    
    
    /*$("#flecha-up").click(function () {
   
    $('html,body').animate({
        scrollTop: $("#slider").offset().top
    }, 2000);
});*/
    /*$("#it").click(function () {
   
    $('html,body').animate({
        scrollTop: $("#sti").offset().top
    }, 2000);
});*/
    
    /*$('.menu a').click(function(){ SmoothScroll($($(this).attr('href'))) });
    */
    
    
});

// Función para mover el slider
function slider() {
    
    let ocultarSldie = sliderNow == 0 ? sliderCount : sliderNow;

	$("#slide"+(ocultarSldie)+">p").hide();

	setTimeout(function(){
		let slide = sliderNow == 0 ? sliderCount : sliderNow;

		$("#slide"+(slide)+">p").fadeIn(700);
	},700);
    
	// Variable con el nuevo margen
	// Es la posición multiplicado por -100 más añadido el signo de porcentaje para indicar que se utiliza esta unidad
	let newMargin = (sliderNow * (-100)) + "%";

	// Le asignamos al div la propiedad margin-left con el valor de la variable
	$('#slider-container').css({ 'margin-left' : newMargin });

	// Aumentamos la posición del slider
	sliderNow++;

	// Si la posición del slider es igual a la cantidad de slides, la seteamos en 0 para que vuelva a empezar
	if (sliderNow == sliderCount) {
		sliderNow = 0;
	}
    
    /*$(".slide"+(sliderNow+1)+">p").fadeIn(500);*/
   

}

/*function SmoothScroll(target){
	if (target.length) {
		$('html, body').animate({ scrollTop: target.offset().top }, 2000);
		return false;
	}
}*/