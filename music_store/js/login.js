function validateForm() {
		'use strict';
		var email = document.getElementById('email');
		var password = document.getElementById('password');

		if (email == null || x == "" && password == null || password == "") {
			alert("Fill out both email and password fields");
			return false;
		} else if (email == "admin@titanmusicstore.com" && password == "LogMeIn") {
			return true;
		} else if (email == "nancy@titanmusicstore.com" && password == "password123") {
			return true;
			else {
				alert("Please enter a valid email and/or password!");
				return false;
			}
		}

		function init() {
			'use strict';
			if (document && document.getElementById) {
				var loginForm = document.getElementById("loginForm");
				loginForm.onsubmit = validateForm;
			}
		}
		window.onload = init;