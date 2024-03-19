// Scroll section active link
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll=() =>{
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset= sec.offsetTop -150;
    });
};
// parei min 47:44