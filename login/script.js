$(function() {
    const $form = $('#login-form');
    const $message = $('#message');
  
    $form.submit(function(e) {
      e.preventDefault();
  
      $message.html('');
  
      const data = $form.serializeArray().reduce((o, x) => {
        o[x.name] = x.value;
        return o;
      }, {});
      
      $.ajax({
        url: 'http://localhost:3000/account/create',
        type: 'POST',
        data:{
            "name": $('#email').val(),
            "pass": $('#password').val(),
        }
      }).then(() => {
        $message.html('<span class="has-text-success">Success! You are now logged in.</span>');
      }).catch(() => {
        $message.html('<span class="has-text-danger">Something went wrong and you were not logged in. Check your email and password and your internet connection.</span>');
      });
    });
  });