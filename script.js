const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => header.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => header.classList.remove('open'));
});

const form = document.getElementById('offerForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Hello Kids ajánlatkérés – ${data.get('type') || 'rendezvény'}`);
  const body = encodeURIComponent(
`Név: ${data.get('name')}
E-mail: ${data.get('email')}
Telefon: ${data.get('phone')}
Rendezvény: ${data.get('type')}
Dátum: ${data.get('date')}
Helyszín: ${data.get('location')}
Vendégek: ${data.get('guests')}

Üzenet:
${data.get('message')}`
  );
  // Ezt az e-mail címet élesítéskor a zenekar valódi címére kell cserélni.
  window.location.href = `mailto:hellokidsband@gmail.com?subject=${subject}&body=${body}`;
});
