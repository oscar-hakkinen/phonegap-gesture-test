<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->



$(document).on("pagecreate","#pageone",function(){
  
    document.addEventListener("deviceready", onDeviceReady, false); //advanced
    
            function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);          //advanced
	document.addEventListener("pause", onPause, false);

	updateDisplay();
    }  //advanced
    
    
    
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   

    $('#swipetext').on("swiperight",function(){
    	$(this).css('color', 'blue');
  	}); 


});