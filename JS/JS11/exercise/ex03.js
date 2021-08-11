let para = document.querySelector('.key');
window.addEventListener('keydown', e => {
    para.innerHTML = `You pressed:${e.key}`;
});
