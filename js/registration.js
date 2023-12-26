async function loginUser() {
    // Local Host
    const Url = 'https://eclipse.herobuxx.me/api/user';

    // Get values from input elements
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userDetails = {
        username: username,
        email: email,
        password: password,
    };

    try {
        const response = await fetch(Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        });

        const responseData = await response.json();

        // Assuming the response contains a token
        const status = responseData.status;
        const message = responseData.message;
        const success = 'success'; // Add this line to define the success variable

        if (status !== success) {
            console.error('Cannot register new user.');
            console.error('Status.', status);
            const notifierDiv = document.getElementById('notifier');
            if (notifierDiv) {
                const errorMessageDiv = document.createElement('div');
                errorMessageDiv.className = 'bg-red-600 my-4 mx-4 h-10 flex items-center justify-center rounded-md';
                errorMessageDiv.innerHTML = `<p class="${message}"></p>`;
                notifierDiv.appendChild(errorMessageDiv);
            }
        } else {
            console.log('Registration succeed');
            window.location.href = 'https://tunes.herobuxx.me/login';
        }
    } catch (error) {
        console.error('Error during registration:', error.message);

        const notifierDiv = document.getElementById('notifier');
        if (notifierDiv) {
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.className = 'bg-red-600 my-4 mx-4 h-10 flex items-center justify-center rounded-md';
            errorMessageDiv.innerHTML = '<p class="text-center">Resgistration failed, try again!</p>';
            notifierDiv.appendChild(errorMessageDiv);
        }
    }
}
