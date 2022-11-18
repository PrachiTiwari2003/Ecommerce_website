const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventlistener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventlistener('click', () => {
        nav.classList.remove('active');
    })
}