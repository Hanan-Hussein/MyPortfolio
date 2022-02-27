// declaring variables
var linkedin= document.getElementById('linkedin');
var mail = document.getElementById('mailing');
var github=document.getElementById('github');


// add eventlistener
linkedin.addEventListener('click', linkedinEvent);
mail.addEventListener('click', mailingEvent);
github.addEventListener('click',githubEvent);

function linkedinEvent(e){
    e.preventDefault();
    window.open(
        'https://www.linkedin.com/in/hanan-hussein-ibrahim-9a478415a/',
        '_blank'
    );
}
function mailingEvent(e){
    e.preventDefault();
    location.href='mailto:hanan.ibrahim@students.moringaschool.com ?body=HI there';
}
function githubEvent (e){
    e.preventDefault();
    window.open(
        'https://github.com/Hanan-Hussein',
        '_blank'
    );
}
