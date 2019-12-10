$(function() {
    const $form = $('#sign-up-form');
    const $message = $('#message-signup');
  
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
            "name": $('#sign-up-username').val(),
            "pass": $('#sign-up-password').val(),
        }
      }).then(() => {
        $message.html('<span class="has-text-success">You have created an account</span>');
        window.setTimeout(function(){location.reload()},1000);
      }).catch(() => {
        $message.html('<span class="has-text-danger">You already have an account.</span>');
      });
    });
  });