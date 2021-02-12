function showPassword(){
    const eye = document.getElementById('eye')
    const fieldPassword = document.getElementById('fieldPassword')
    const eyeSlash = document.getElementById('eyeSlash')
    if(eye.style.display === 'none'){
        eye.style.display = 'block'
        eyeSlash.style.display = 'none'
        fieldPassword.type = 'text'
    }else{
        eye.style.display = 'none'
        eyeSlash.style.display = 'block'
        fieldPassword.type = 'password'
    }
}
document.getElementById('btnLogin').addEventListener('click', function(e){
    e.preventDefault()
    alert('Voê está logado')
})