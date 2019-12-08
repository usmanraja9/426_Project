import {login} from "../../api/account/Account";

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
          url: 'http://localhost:3000/account/login',
          type: 'POST',
          data:{
              "name": $('#login-username').val(),
              "pass": $('#login-password').val(),
          }
        }).then(() => {
          $message.html('<span class="has-text-success">loged in</span>');
        }).catch(() => {
          $message.html('<span class="has-text-danger">create an account</span>');
        });
      });
    });