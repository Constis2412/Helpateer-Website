let text = document.getElementById('p_text')
let people = document.getElementById('people')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
<<<<<<< HEAD
    text.style.marginTop = value*2 + 'px';
    people.style.marginTop = value*0.5 + 'px';
=======
    text.style.marginTop = value*1.5 + 'px';
    people.style.marginTop = value*-0.5 + 'px';
>>>>>>> 6197ccb5ce961d8954506e5b991d97122fca6ff8
})