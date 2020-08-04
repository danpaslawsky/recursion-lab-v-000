 // Code your solution here!

function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
    
  }
  
let revString = "";
  function reverseString(string) { 
   
     revString += string[string.length - 1];
    console.log("REV: ",revString)
    
    let mySubString = string.substring(0, string.length - 1)
   console.log("SUB: ", mySubString)
  if(mySubString.length > 0){
       reverseString(mySubString);
        
  }else{
    string = revString
    revString = ""
    return;  
  }
  
} 

function isPalindrome(pal){
  if(pal === reverseString(pal)) {
    return true;
  }
  else{
  return false;
}

}
