document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      const nav = document.getElementById('navList');
      const toggle = document.getElementById('menuToggle');
      if(nav.classList.contains('show')){
        nav.classList.remove('show');
        toggle.setAttribute('aria-expanded','false');
      }
    }
  });
});

const toggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
toggle.addEventListener('click', ()=>{
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navList.classList.toggle('show');
});

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let ok = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if(!name.value.trim()){
      nameError.textContent = 'Please enter your name.'; ok = false;
    }
    if(!email.validity.valid){
      emailError.textContent = 'Enter a valid email address.'; ok = false;
    }
    if(!message.value.trim()){
      messageError.textContent = 'Please include a message.'; ok = false;
    }

    if(ok){
      form.reset();
      alert('Thanks! Your message was validated locally (no data stored).');
    }
  });
}
