document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      // Here you can add functionality to send the message to your email server.
      document.getElementById('contact-form').reset();
      document.getElementById('confirmation').style.display = 'block';
    } else {
      alert('Please fill out all fields.');
    }
  });
  
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  