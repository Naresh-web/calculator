
 const display = document.getElementById('display');

    function appendToDisplay(number){
            display.value += number;
    }
     function clearDisplay(){    
        display.value = '';
    }
     function calculate(){
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error'
        }
    }


