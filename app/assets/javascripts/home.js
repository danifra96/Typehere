$(document).ready(function() {
	$('#sidebar').mouseenter(function() {
	    $("#sidebar").addClass("bigside");
	    $("#cke_main").addClass("smallmain");
	    $(".headtitle").addClass("movetitle");
	});
	$('#sidebar').mouseleave(function() {
	    $(".headtitle").removeClass("movetitle");
	    $("#cke_main").removeClass("smallmain");
	    $("#sidebar").removeClass("bigside");
	});

	$(".button").click(function() {
		$("iframe").contents().find("#test").toggleClass("dark");
		$(".button").toggleClass("active");
	});

	CKEDITOR.instances.main.on("instanceReady", function() {
		CKEDITOR.instances.main.insertHtml(localStorage.content);
	})

	CKEDITOR.instances.main.on("contentDom", function() {
		CKEDITOR.instances.main.document.on("keyup", function(event) {
			var data = $("iframe").contents().find("#test").html();

			localStorage.content = data;

			/*console.log(CKEDITOR.instances.main.getData());*/
		});
	});
});

