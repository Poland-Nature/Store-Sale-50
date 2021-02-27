$(document).ready(function () {
	$('.cta, .monogo-form__button, .popup-text-order, .btn_click').click(function (e) {
		window.onbeforeunload = null;
	});
});