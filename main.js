$(document).ready(function(){
	$(window).on('scroll', function(){
		sc = $(window).scrollTop();
		if(sc>50){
			$('nav').addClass('nav-scrolled');
		}else{
			$('nav').removeClass('nav-scrolled')
		}
	});
})

$(document).ready(function() {
	$('a.dropdown-toggle').on("click", function(e){
		$('div.dropdown-menu.second').removeClass("show");
	    $(this).next('div').toggleClass("show");
	    e.stopPropagation();
    	e.preventDefault();
  });
})

