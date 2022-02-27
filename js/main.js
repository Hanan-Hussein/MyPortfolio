// declaring variables
var linkedin= document.getElementById('linkedin');
var mail = document.getElementById('mailing');
var github=document.getElementById('github');
var libraryProject = document.getElementById('library');
var quiz = document.getElementById('quiz');
var insurance = document.getElementById('insurance');


// add eventlistener
linkedin.addEventListener('click', linkedinEvent);
mail.addEventListener('click', mailingEvent);
github.addEventListener('click',githubEvent);
libraryProject.addEventListener('click',libraryEvent);
quiz.addEventListener('click',quizEvent);
insurance.addEventListener('click',insuranceEvent);

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
function libraryEvent(e){
    e.preventDefault();
    window.open(
        'https://github.com/Hanan-Hussein/Online-Library-System',
        '_blank'
    );
}
function quizEvent(e){
    e.preventDefault();
    window.open(
        'https://hanan-hussein.github.io/QuizBoard/',
        '_blank'
    );
}
function insuranceEvent (e){
    e.preventDefault();
    window.open(
        'https://hanan-hussein.github.io/Insuarance-Website/',
        '_blank'
    );
}

