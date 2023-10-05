
        // JavaScript for Bootstrap form validation
        (function () {
            'use strict';

            window.addEventListener('load', function () {
                var form = document.getElementById('internship-form');
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            }, false);
        })();
  