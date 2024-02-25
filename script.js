function operate(a,operator,b){
    if(b == 0 && operator == "/"){
        return "no";
    }

    switch(operator){
        case '+':
            return a+b;
        
        case '-':
            return a-b;

        case '*':
            return a*b;

        case '/':
            return a/b;
    }



}

let display = document.querySelector('input');
display.value = 0;



Array.from(document.querySelectorAll('button')).forEach((element) => {
    element.addEventListener('click',(event) => {
        display.value += event.target.className;

    })
});

