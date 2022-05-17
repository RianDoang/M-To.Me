var namaError = document.getElementById('nama_error')
var emailError = document.getElementById('email_error')
var pesanError = document.getElementById('pesan_error')
var kirimError = document.getElementById('subit_error')

function validateName() {
  var nama = document.getElementById('contact-name').value;

  if(nama.length == 0) {
    namaError.innerHTML = 'Nama diperlukan';
    return false;
  }
  if(!nama.match()) {
    namaError.innerHTML = 'Tulis nama lengkap';
    return false;
  }

namaError.innerHTML = '';
  return true;
}

function validateEmail() {
  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {
    emailError.innerHTML = 'Email diperlukan';
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-\[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email tidak valid';
    return false;
  }

  emailError.innerHTML = '<i class="bi bi-check-circle"></i>';
  return true;
}

function validatePesan() {
  var pesan = document.getElementById('contact-pesan').value;
  var required = 0;
  var left = required - pesan.length;

  if(left>0) {
    pesanError.innerHTML = left + 'Masukan pesan apa saja';
    return false;
  }

  emailError.innerHTML = '<i class="bi bi-check-circle"></i>';
  return true;
}

function validateForm() {
  if(!validateEmail () || !validatePesan ()) {
    pesanError.style.display = 'block';
    pesanError.innerHTML = 'Tolong di isi dengan benar';
    setTimeout(function(){pesanError.style.display = 'none';}, 2000);
    return false;
  }
}