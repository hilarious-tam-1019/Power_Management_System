const form = document.getElementById('login-form');
        form.addEventListener('submit', loginUser);

	async function loginUser(event) {
		event.preventDefault()
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
		const response = await fetch('/login', {
			method: 'POST',
			credentials:'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		}) 
        const data = await response.json()
        if (data.user) {
                alert('Login successful')
                window.location.href = '/home'
            } else {
                alert('Please check your username and password')
            }
        }
    

// function App() {
// 	async function loginUser(event) {
// 		event.preventDefault()

// 		const response = await fetch('/login', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				email,
// 				password,
// 			}),
// 		})

// 		const data = await response.json()

// 		if (data.user) {
// 			localStorage.setItem('accessToken', data.user)
// 			alert('Login successful')
// 			window.location.href = '/about'
// 		} else {
// 			alert('Please check your username and password')
// 		}
// 	}}
