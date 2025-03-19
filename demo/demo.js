// dom
// 1. Attribute events
// 2. Assign event using the element node
let h1Element = 
document.querySelectorAll('h1');

for (let i = 0; i < h1Element; ++i){
    h1Element[i].onclick = function(e){
        console.log(e.target);
        
    }
    
}

