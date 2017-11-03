; // Start custom code
$(document).ready(function () {
	$('.column').jcolumn();

	$('.registration_text_step').jcolumn();

	$('#service').click(function(){
		$('.header-center').slideToggle();
	});

	new PerfectScrollbar('.modal-agreement', {
		maxScrollbarLength: 100,
		wheelPropagation: true,
		wheelSpeed: .3
	}).update();
});