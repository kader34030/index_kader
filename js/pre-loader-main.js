/* 

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(window).load(function(){
		$('body').addClass('loaded');
	 	$('h1').css('color','#222222');
		//var aid = document.getElementById("audio-play"); 
		//aid.play();	
		  Modernizr.load([
		  {
		   // test: Modernizr.json,
		  //  nope: '',
		    complete: function() {
		      var aid = document.getElementById("audio-play"); 
			  setTimeout(function(){
			  	aid.play();	
			  },4000);
 
		    }
		  }]);
});
