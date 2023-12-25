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

        // Set the token in a cookie
        document.cookie = `token=${token}; expires=${new Date(responseData.expiresIn)}; path=/`;

        console.log('Login successful');
        window.location.href = 'https://tunes.herobuxx.me';
    } catch (error) {
        console.error('Error during login:', error.message);
    }
}
