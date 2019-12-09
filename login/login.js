
$(async function() {
    const $form = $('#login-form');
    const $message = $('#message');

    $form.submit(async function(e) {
        e.preventDefault();
    
        $message.html('');
    
        try {
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
            $message.html('<span class="has-text-danger">Logged In!</span>');
        } catch {
            $message.html('<span class="has-text-danger">create an account</span>');
        }
 


      });

  });