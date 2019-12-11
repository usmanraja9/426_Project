
$(async function () {
    $('.signup-card').hide();
    $(".signup").css("background", "none");

    const $form = $('#login-form');
    const $message = $('#message-login');

    $form.submit(async function (e) {
        e.preventDefault();

        $message.html('');

        try {
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
            window.location.href = '../index.html';

        } catch {
            $message.html('<span class="has-text-danger">create an account</span>');
            window.setTimeout(function () {
                $(".signup-card").show();
                $(".login-card").hide();
                $(".login").css("background", "none");
                $(".signup").css("background", "#add8e6");
                $('input[name=login-username]').val("")
                $('input[name=login-password]').val("")
                $message.html('');
            }, 2000);

        }



    });

});


$(".login").click(function () {
    $(".signup-card").hide();
    $(".login-card").show();
    $(".signup").css("background", "none");
    $(".login").css("background", "#add8e6");
});

$(".signup").click(function () {
    $(".signup-card").show();
    $(".login-card").hide();
    $(".login").css("background", "none");
    $(".signup").css("background", "#add8e6");
});

