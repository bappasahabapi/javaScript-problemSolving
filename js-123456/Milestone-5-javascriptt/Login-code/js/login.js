
// Login part start

// add event lisener to the button
document.getElementById('login-submit')
    .addEventListener('click', function () {
        // console.log('clicked');

        // get user email:
        const userEmail = document.getElementById('user-email').value;
        // console.log(userEmail);

        //get user password:
        const userPassword = document.getElementById('user-password').value;

        // check email and password:
        if (userEmail == 'bappada' && userPassword == 'admin') {
            window.location.href = 'banking.html';
        }
    })
// Login part end
