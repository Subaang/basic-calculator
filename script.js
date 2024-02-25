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


