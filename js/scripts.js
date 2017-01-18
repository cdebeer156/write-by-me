$('body').scrollspy({ target: '#navbar-example' })

$('#concept').click(function(){
	window.open('../final_project/pdf/DeBeer_WritingExampleIntro.pdf', '_blank');
})

$('#reference').click(function(){
	window.open('../final_project/pdf/DeBeer_WritingExample_Reference.pdf', '_blank');
})

$('#task').click(function(){
	window.open('../final_project/pdf/DeBeer_WritingExample_StepbyStep.pdf', '_blank');
})

$('#cash').click(function(){
	window.open('https://cdebeer156.github.io/Cash-Register-Demo', '_blank');
})

$('#citipix').click(function(){
	window.open('https://cdebeer156.github.io/citipix-demo/', '_blank');
})

$('#linkedin').click(function(){
	window.open('www.linkedin.com/in/cdebeer156', '_blank');
})

$('#twitter').click(function(){
	window.open('https://twitter.com/CarlJDeBeer', '_blank');
})


$(function() {
	
	var offset = 300, //amount of scrolling before button appears
		
		offset_opacity = 1200, //amount of scrolling before button fades
		
		scroll_top_duration = 700, //duration of the top scrolling animation (in ms)
		
		$back_to_top = $('.goto-top'); //grab the "back to top" link

	//Toggles visibility on button
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('goto-is-visible') : $back_to_top.removeClass('goto-is-visible goto-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('goto-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});