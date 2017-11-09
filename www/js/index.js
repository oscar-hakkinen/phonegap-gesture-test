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


function onResume() {
    alert("onresume");
    
    //restore prev state of buttons
    
}

function onPause() {
    alert("onPause");
    
    window.localStorage.setItem(swipetext,red);
    window.localStorage.getItem(swipetext,red);
    
    //store current state of buttons
}