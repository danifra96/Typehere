CKEDITOR.editorConfig = function (config) {
	config.enterMode = CKEDITOR.ENTER_P;
	config.toolbar_personal = [
    	["Format", "Bold",  "Italic",  "Underline", "RemoveFormat"],
  	];
  	config.toolbar = "personal";
  	config.startupFocus = true;
  	config.bodyId = 'test';
}
