async function loginUser() {
    // Local Host
    //const Url = 'http://localhost:8080/http://c.aether.herobuxx.me/api/login/auth';
    const Url = 'https://moondrop.herobuxx.me/api/login/auth';

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
    } catch (error) {
        console.error('Error during login:', error.message);
    }
}
