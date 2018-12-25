$(document).ready(function() {

	// приватная переменная
	var _form = $('#form');
	var _password = $('#password');
	var _passwordPass = '123';
	var _email = $('#email');
	var _emailPass = 'mail@mail.com';
	var _button = $('#button');
	var _errorEmailNotify = $('.notify--error-email');
	var _errorEmailFormatNotify = $('.notify--error-email-format');
	var _errorPasswordNotify = $('.notify--error-password');
	var _errorEmailPasswordNotify = $('.notify--error-email-password');
	var _FormValid = true;
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
				valid = false;
		} else {
			_errorEmailNotify.fadeOut(500);
				valid = true;
		}

		_email.on('focus', function(){
			_errorEmailNotify.fadeOut(300);				
		});

		if (_password.val().trim().length === 0) {
			_errorPasswordNotify.fadeIn(800);
			e.preventDefault();
				valid = false;
		} else {
			_errorPasswordNotify.fadeOut(500);
				valid = true;
		}

		_password.on('focus', function(){
			_errorPasswordNotify.fadeOut(300);				
		});

		if ( _email.val().trim() !== '' ) {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if ( pattern.test( _email.val().trim() ) ) {
				_errorEmailFormatNotify.fadeOut(500);
				valid = true;
			} else {
				_errorEmailFormatNotify.fadeIn(800);
				valid = false;
			}
		}

		_FormValid = valid;
				console.log('_FormValid = ' + _FormValid);
				if ( _FormValid === true ) {
					if ( !(_email.val().trim() == _emailPass && _password.val().trim() == _passwordPass) ) {
						_errorEmailPasswordNotify.fadeIn(500);
						e.preventDefault();
					}
				}

	}

	/*var _sendEmail = function(e){
				console.log('_FormValid = ' + _FormValid);
				if ( _FormValid === true ) {
					if ( !(_email.val().trim() == _emailPass && _password.val().trim() == _passwordPass) ) {
						_errorEmailPasswordNotify.fadeIn(500);
						e.preventDefault();
					}
				}
			}*/



	/*if () {
		if ( !(_email.val().trim() == _emailPass && _password.val().trim() == _passwordPass) ) {
			_errorEmailPasswordNotify.fadeIn(500);
			e.preventDefault();
		} else {
			_errorEmailPasswordNotify.fadeOut(500);
		}
	}*/

	return {
		init
	}

	}());

	// запускаем модуль
	checkCommentForm.init();

});
