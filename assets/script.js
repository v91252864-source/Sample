document.addEventListener('DOMContentLoaded',()=>{
  const pw = document.getElementById('password');
  const toggle = document.getElementById('togglePw');
  const form = document.getElementById('loginForm');

  toggle.addEventListener('click',()=>{
    const type = pw.type === 'password' ? 'text' : 'password';
    pw.type = type;
    toggle.textContent = type === 'password' ? 'Show' : 'Hide';
  });

  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if (!form.reportValidity()) return;
    // Simulate success — in real apps submit to server
    form.querySelector('.title').textContent = 'Signed in';
    form.querySelector('.primary').textContent = 'Done';
    setTimeout(()=>alert('Fake sign-in success (demo).'),150);
  });
});
