
$(async function () {

  const $form = $('#sign-up-form');
  const $message = $('#message-signup');

  $form.submit(async function (e) {
      e.preventDefault();

      $message.html('');

      try {
          let result = await axios({
              method: 'POST',
              url: 'http://localhost:3000/account/create',
              data: {
                  "name": $('#sign-up-username').val(),
                  "pass": $('#sign-up-password').val(),
                  "data": {
                    "name": $('#sign-up-name').val(),
                    "email": $('#sign-up-email').val(),
                  }
              }
          });

        $message.html('<span class="has-text-success">You have created an account</span>');
        window.setTimeout(function () { location.reload() }, 1000);

      } catch {
        $message.html('<span class="has-text-danger">You already have an account.</span>');

      }



  });

});
