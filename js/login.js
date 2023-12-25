async function loginUser() {
    // Local Host
    const Url = 'https://eclipse.herobuxx.me/api/auth';

    // Get values from input elements
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const loginDetails = {
        username: username,
        password: password,
    };

    try {
        const response = await fetch(Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginDetails),
        });

        const responseData = await response.json();

        // Assuming the response contains a token
        const token = responseData.token;

        if (token !== undefined) {
            // Set the token in a cookie
            document.cookie = `token=${token}; expires=${new Date(responseData.expiresIn)}; path=/`;
            console.log('Login successful');
            window.location.href = 'https://tunes.herobuxx.me';
        } else {
            console.error('Token is undefined. Login failed.');
            // Display error message in the "notifier" div
            const notifierDiv = document.getElementById('notifier');
            if (notifierDiv) {
                const errorMessageDiv = document.createElement('div');
                errorMessageDiv.className = 'bg-red-600 my-4 mx-4 h-10 flex items-center justify-center rounded-md';
                errorMessageDiv.innerHTML = '<p class="text-center">Incorrect Login information!</p>';
                notifierDiv.appendChild(errorMessageDiv);
            }
        }
    } catch (error) {
        console.error('Error during login:', error.message);

        // Display error message in the "notifier" div
        const notifierDiv = document.getElementById('notifier');
        if (notifierDiv) {
            const errorMessageDiv = document.createElement('div');
            errorMessageDiv.className = 'bg-red-600 my-4 mx-4 h-10 flex items-center justify-center rounded-md';
            errorMessageDiv.innerHTML = '<p class="text-center">Incorrect Login information!</p>';
            notifierDiv.appendChild(errorMessageDiv);
        }
    }
}
