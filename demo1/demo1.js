// 1 input //select
// 2 key up / down
let inputElement = 
// document.querySelector('input[type = "text"]');

// inputElement.onchange = function(e){
//     console.log(e.target.value);
    
// }

// document.querySelector('select');

// inputElement.onchange = function(e){
//     console.log(e.target.value);
    
// }

// document.querySelector('input[type = "text"]');

// inputElement.onkeydown = function(e){
//     console.log(e.target.value);
    
// }
document.querySelector('input[type = "text"]');

inputElement.onkeyup = function(e){
    console.log(e.which.value);
    switch(e.which){
        case 27:
            console.log('Exit');
            
            break;
        // case 13:
        //     console.log('hell0');
            
        //     break;
        
    }
    
}

