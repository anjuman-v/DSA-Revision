var num = 5;
function fizzBuzz(num) {
    // Write code here
    
 for(var i = 1; i <= num; i++){
            
     
    if((i%3===0) &&(i%5===0)){
      
        console.log("FizzBuzz");
        
    }
    else if((i%3===0)){
 
        
      console.log("Fizz")  ;
    }
    
    else if(i%5===0){
    
        console.log("Buzz");
    }
    
    else{
        console.log(i);
    } 
    
}
}

//output
// 1
// 2
// Fizz
// 4
// Buzz