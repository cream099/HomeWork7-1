const loginForm = document.querySelector('.login-form')

const hdlLogin = e => {
  alert('กรอกข้อมูลให้ครบ')
  console.log('ok, submit')
}

loginForm.addEventListener('submit', hdlLogin)