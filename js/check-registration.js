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
	var _errorEmailBusydNotify = $('.notify--error-emailBusy');
	var _mailValid;
	var _passwordValid;
	var _formValid;
						

	// метод запуска
	var checkCommentForm = (function(){
		var init = function(){
			_setUpListeners();
		}

	// метод прослушивания
	var _setUpListeners = function() {	
			_form.on('submit', function(e) {
				_formValidation(e);
				e.preventDefault();

			});	
	}
		

	// валидация формы
	var _formValidation = function(e) {

		// провеока емайл
		if (_email.val().trim().length === 0) {
			_errorEmailNotify.fadeIn(800);
				_mailValid = false;
		} else {
			_errorEmailNotify.fadeOut(500);
				_mailValid = true;
		}

		_email.on('focus', function(){
			_errorEmailNotify.fadeOut(300);				
		});

		// проверка пароля
		if (_password.val().trim().length === 0) {
			_errorPasswordNotify.fadeIn(800);
				_passwordValid = false;
		} else {
			_errorPasswordNotify.fadeOut(500);
				_passwordValid = true;
		}

		_password.on('focus', function(){
			_errorPasswordNotify.fadeOut(300);				
		});

		// проверка емейла на правельный формат
		if ( _email.val().trim() !== '' ) {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if ( pattern.test( _email.val().trim() ) ) {
				_errorEmailFormatNotify.fadeOut(500);
				_formValid = true;
			} else {
				_errorEmailFormatNotify.fadeIn(800);
				_formValid = false;
			}
			_email.on('focus', function(){
				_errorEmailFormatNotify.fadeOut(300);				
			});
		}

		// отправка формы если нужный емейл и пароль совпадают
				console.log('_mailValid = ' + _mailValid);
		if ( _mailValid === true && _passwordValid === true && _formValid === true ) {
			if ( !(_email.val().trim() == _emailPass ) ) {
				_form.unbind('submit').submit();
			} else {
				_errorEmailBusydNotify.fadeIn(500);
			}
			_email.on('focus', function(){
				_errorEmailBusydNotify.fadeOut(300);				
			});
			_password.on('focus', function(){
			_errorEmailBusydNotify.fadeOut(300);				
		});
		} 
	}


	return {
		init
	}

	}());

	// запускаем модуль
	checkCommentForm.init();

});
