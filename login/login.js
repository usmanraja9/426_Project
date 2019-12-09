
$(async function() {
    const $form = $('#login-form');
    const $message = $('#message');

    $form.submit(async function(e) {
        e.preventDefault();
    
        $message.html('');
    
        try {
            $message.html('<span class="has-text-danger">Logged In!</span>');
        } catch {
            $message.html('<span class="has-text-danger">create an account</span>');
        }
        const data = $form.serializeArray().reduce((o, x) => {
          o[x.name] = x.value;
          return o;
        }, {});
        let result = await axios({
            method: 'POST',
            url: 'http://localhost:3000/account/login',
            data: {
              "name": $('#login-username').val(),
              "pass": $('#login-password').val(),
              }
        });

        localStorage.setItem('token', result.data.jwt);




        // $.ajax({
        //   url: 'http://localhost:3000/account/login',
        //   type: 'POST',
        //   data:{
        //       "name": $('#login-username').val(),
        //       "pass": $('#login-password').val(),
        //   }
        // }).then(() => {
        //   $message.html('<span class="has-text-success">loged in</span>');

        // }).catch(() => {
        //   $message.html('<span class="has-text-danger">create an account</span>');
        // });
        // setToken("DEF");

      });

  });