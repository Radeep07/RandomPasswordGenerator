//Message to user with hints to choose the length of password and the character type
alert("Welcome aboard! Please enter your choices to generate a password! Hint: Length must be in between 8 and 128. Select at least one of the charater types");
//Storing the four categories of charater type in different variables
var sChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var nChar = "1234567890";
var lChar = "abcdefghijklmnopqrstuvwxyz";
var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//checking(and validating) the user input before generating the random password on the event 'generate password button click' 
document.getElementById("generate").addEventListener("click", function() {
    //tChar is initialised with null character set and it is used to store the user selected character set
    var tChar = "";
    //lengthP is used to store the length of the password given by the user
    var lengthP = parseInt(document.getElementById("length").value);
    //validating the user input including no entry to the length of password field
    if (isNaN(lengthP) || (lengthP<8 || lengthP>128)) {
        alert("Please enter length of password in between 8 and 128");
        //looping over till the valid input fron the user
        while(document.getElementById("length").value < 8 || document.getElementById("length").value >128){
        document.getElementById("length").value = parseInt(prompt("Enter valid length(8-128) of password"));
        }
    }
    //checking the validity of the input whether at least one of the character types is selected by the user
    if (document.getElementById("Check1").checked || document.getElementById("Check2").checked || document.getElementById("Check3").checked || document.getElementById("Check4").checked) {          
       
       if (document.getElementById("Check1").checked && document.getElementById("Check2").checked && document.getElementById("Check3").checked && document.getElementById("Check4").checked) {
           tChar = tChar + sChar + nChar + lChar + uChar;
       }
       else if(document.getElementById("Check1").checked && document.getElementById("Check2").checked && document.getElementById("Check3").checked){
            tChar = tChar + sChar + nChar + lChar;
       }
       else if(document.getElementById("Check2").checked && document.getElementById("Check3").checked && document.getElementById("Check4").checked){
        tChar = tChar + nChar + lChar + uChar;
        }
        else if(document.getElementById("Check1").checked && document.getElementById("Check3").checked && document.getElementById("Check4").checked){
            tChar = tChar + sChar + lChar + uChar;
        }
        else if(document.getElementById("Check1").checked && document.getElementById("Check2").checked && document.getElementById("Check4").checked){
            tChar = tChar + sChar + nChar + uChar;
       }
       else if (document.getElementById("Check1").checked && document.getElementById("Check2").checked){
        tChar = tChar + sChar + nChar;
       }
       else if (document.getElementById("Check1").checked && document.getElementById("Check3").checked){
        tChar = tChar + sChar + lChar;
       }
       else if (document.getElementById("Check1").checked && document.getElementById("Check4").checked){
        tChar = tChar + sChar + uChar;
       }
       else if (document.getElementById("Check2").checked && document.getElementById("Check3").checked){
        tChar = tChar + nChar + lChar;
       }
       else if (document.getElementById("Check2").checked && document.getElementById("Check4").checked){
        tChar = tChar + nChar + uChar;
       }
       else if (document.getElementById("Check3").checked && document.getElementById("Check4").checked){
        tChar = tChar + lChar + uChar;
       }
       else if (document.getElementById("Check1").checked){
        tChar = tChar + sChar;
       }
       else if (document.getElementById("Check2").checked){
        tChar = tChar + nChar;
       }
       else if (document.getElementById("Check3").checked){
        tChar = tChar + lChar;
       }
       else if (document.getElementById("Check4").checked){
        tChar = tChar + uChar;
       }
       alert("You have selected password of length "+ lengthP + " and from the character set : "+tChar);
       //generating the password of given length and character set
       rPassword = "";
       for (var i=0;i<lengthP;i++){
           rPassword = rPassword+(tChar.charAt(Math.floor(Math.random()*Math.floor(tChar.length-1))));
       }
       //alert("generated password "+rPassword);
       document.getElementById("passwordDisplay").value = rPassword;       
   }//end of if for at lease one charater set checked
   //else alerting the user for the valid input selection
   else {        
        alert("Please select at least one of the check boxes from character type");
    }   
});//end of generate button click event

//function to copy the generated password to the clipboard
document.getElementById("copy").addEventListener("click",function(){
    document.getElementById("passwordDisplay").select();
    document.execCommand("Copy");
    alert("Your password is copied to clipboard!");
});//end of copy to clipboard
