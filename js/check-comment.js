$(document).ready(function() {

	// приватная переменная
	var _form = $('#form');
	var _textarea = $('#textarea');
	var _errorNotify = $('.notify--error-hide');

	// метод запуска
	var checkCommentForm = (function(){
		var init = function(){
			_setUpListeners();
		}

	// метод прослушивания
	var _setUpListeners = function() {	
			_form.on('submit', function(e) {
				_formValidation(e);
			});	
	}

	// валидация формы
	var _formValidation = function(e) {
		if (_textarea.val().trim().length === 0) {
			_errorNotify.fadeIn(800);
			e.preventDefault();
		} else {
			_errorNotify.fadeOut(500);
		}

		_textarea.on('focus', function(){
			_errorNotify.fadeOut(300);				
		});
		
	}

	return {
		init
	}

	}());

	// запускаем модуль
	checkCommentForm.init();

});
