fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('users', JSON.stringify(data));

    
    data.forEach(user => {
      const div = document.createElement('div');
      div.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`;
      document.body.appendChild(div);
    });
  })
  .catch(error => console.error('Error:', error));
