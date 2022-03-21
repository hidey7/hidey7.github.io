let myMessage = document.querySelector('h1');

myMessage.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if(!myName) {
        myMessage.textContent = 'Hideya is cool'
    } else {
        localStorage.setItem('name', myName);
        myMessage.textContent = myName + ' is cool';
    }
}