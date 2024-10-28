document.getElementById('generateHash').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    fetch('http://127.0.0.1:5000/hash', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.hash) {
            document.getElementById('hashResult').innerText = data.hash;
        } else {
            document.getElementById('hashResult').innerText = 'Помилка: ' + data.error;
        }
    })
    .catch(error => {
        document.getElementById('hashResult').innerText = 'Помилка підключення до сервера';
        console.error('Error:', error);
    });
});
