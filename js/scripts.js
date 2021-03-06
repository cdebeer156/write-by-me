$('body').scrollspy({ target: '#scroll-nav' })

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
	window.open('http://www.linkedin.com/in/cdebeer156', '_blank');
})

$('#twitter').click(function(){
	window.open('https://twitter.com/CarlJDeBeer', '_blank');
})

$(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
});

$('#scroll').click(function(){ 
    $("html").animate({ scrollTop: 0 }, 600); 
    return false; 
});
