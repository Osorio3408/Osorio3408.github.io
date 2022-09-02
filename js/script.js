var bdark = document.getElementById('bdark');
var body = document.body;

load();

bdark.addEventListener("click", function(){
    bdark.classList.toggle("active");
    body.classList.toggle("darkmode")
    store(body.classList.contains('darkmode'));
});


function load(){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        store('false');
    }else if (darkmode == 'true'){
        body.classList.add('darkmode');
    }
}

function store(value){
    localStorage.setItem('darkmode', value);
}