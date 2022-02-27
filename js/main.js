// declaring variables
var linkedin= document.getElementById('linkedin');
var mail = document.getElementById('mail');
var github=document.getElementById('github');


// add eventlistener
linkedin.addEventListener('click', linkedinEvent);
mail.addEventListener('click', mail);
github.addEventListener('click',githubEvent);

function linkedinEvent(e){
    e.preventDefault();
    window.open(
        'https://www.linkedin.com/in/hanan-hussein-ibrahim-9a478415a/',
        '_blank'
    );
}
function mail(e){
    e.preventDefault();
}
function githubEvent (e){
    e.preventDefault();
    window.open(
        'https://github.com/Hanan-Hussein',
        '_blank'
    );
}
