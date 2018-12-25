$(document).ready(function() {

	// приватная переменная
	var _form = $('#form');
	var _password = $('#password');
	var _email = $('#email');
	var _button = $('#button');
	var _errorEmailNotify = $('.notify--error-email');
	var _errorEmailFormatNotify = $('.notify--error-email-format');
	var _errorPasswordNotify = $('.notify--error-password');
	var _errorEmailPasswordNotify = $('.notify--error-email-password');
	// var value = input.val().trim();
						

	// метод запуска
	var checkCommentForm = (function(){
		var init = function(){
			_setUpListeners();
		}

	// метод прослушивания
	var _setUpListeners = function() {	
			_form.on('submit', function(e) {
				_formValidation(e);
				// e.preventDefault();

			});	
	}
		

	// валидация формы
	var _formValidation = function(e) {
		if (_email.val().trim().length === 0) {
			_errorEmailNotify.fadeIn(800);
			e.preventDefault();
		} else {
			_errorEmailNotify.fadeOut(500);
		}

		_email.on('focus', function(){
			_errorEmailNotify.fadeOut(300);				
		});

		if (_password.val().trim().length === 0) {
			_errorPasswordNotify.fadeIn(800);
			e.preventDefault();
		} else {
			_errorPasswordNotify.fadeOut(500);
		}

		_password.on('focus', function(){
			_errorPasswordNotify.fadeOut(300);				
		});
		
	}

	return {
		init
	}

	}());

	// запускаем модуль
	checkCommentForm.init();

});
