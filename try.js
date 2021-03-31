// initial count
var  count = 0;

const counter = document.getElementById('value');

// increase
function increase(){
    count = count + 1;
    counter.innerHTML = count;
    colorfont();
}

// reset
function reset(){
    count = 0;
    counter.innerHTML = count;
    colorfont();
}

// decrease
function decrease(){
    count = count - 1;
    counter.innerHTML = count;
    colorfont();
}


// to change color
function colorfont(){
    if(count > 0){
        counter.style.color = '#2ecc71';
    }
    else if (count < 0){
        counter.style.color = '#e74c3c';
    }
    else{
        counter.style.color = '#2c3e50';
    }
}


