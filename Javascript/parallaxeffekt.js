let text = document.getElementById('p_text')
let people = document.getElementById('people')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value*2 + 'px';
    people.style.marginTop = value*0.5 + 'px';

})