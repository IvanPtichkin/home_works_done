function send(){
document.getElementById("user_enter").submit();
}
const last_name = document.getElementById('last_name')
const first_name = document.getElementById('first_name')
const date = document.getElementById('date')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const submit = document.getElementById('send')
submit.addEventListener('click', send)
