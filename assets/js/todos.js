$("ul").on("click", "li", function() {
	$(this).toggleClass("strike");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event) {
	if(event.charCode === 13) {
		var newTask = $("<li><span><i class=\"fa fa-trash\"></i></span> " + $(this).val() + "</li>").hide().fadeIn(500);
		$("ul").append(newTask);
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("input").fadeToggle();
});
