// DOM elements
const firstname = document.getElementById("fname")
const lastname = document.getElementById("lname")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const message = document.getElementById("message")
const form = document.getElementById("formdata")
const body = document.querySelector("body")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")
const closebutton = document.getElementById("closemodal")
const buttonoverlay = document.getElementsByClassName("buttonoverlay")
let inputs = document.getElementsByClassName("inputs")
// let errmsg = ""

// REGEX elements
const regname = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/
const regphone = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
const regemail = /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/
const regmessage = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-,\*\>\_<\/\!\@\#\$\%\&\(\)\ "\?\;\:\{\}\[\]\=\+\^]+$/



form.setAttribute("novalidate", true)
form.onsubmit = submitFormData

function submitFormData(event){
    event.preventDefault() /*Prevents default initial refresh*/
    
    for (let i = 0; i < inputs.length; i++) {
        if((inputs[i].value == "") && (inputs[i].id != "phone")) {
            // console.log('Enter mandatory fields')
            inputs[i].style.borderColor == "red"            
            }           
    }
    let checkField = 0
    //  Validate all the input data in the form       
    if(validInput(regname, firstname) && (firstname.value.length > 0)){
        checkField = 1;
        console.log({FirstName:firstname.value})

    }
    else{
        console.log("Enter valid First Name")
    }

    if(validInput(regname, lastname) && (lastname.value.length > 0)){
        checkField = 1;
        console.log({LasttName:lastname.value})
    }
    else{
        console.log("Enter valid Last Name")
    }
    if(validInput(regphone, phone) && (phone.value.length > 0)){
        console.log({Telephone:phone.value})
    }
    else{
        console.log("Enter valid phone")
    }
    if(validInput(regemail, email) && (email.value.length > 0)){
        checkField = 1;
        console.log({Email:email.value})
    }
    else{
        console.log("Enter valid Email")
    }
    if(validInput(regmessage, message) && (message.value.length > 0)){
        checkField = 1;
        console.log({Message:message.value})
    }
    else{
        console.log("Enter valid Message")
    }    
    
    if ((firstname.value.length > 0)&&(lastname.value.length > 0)&&(email.value.length > 0)&&(message.value.length > 0))
    {
        // open modal on submission of form data
        openModal()
    }          
}     
   
   
// Validate the input data
function validInput(regex, input)
{
    return regex.test(input.value)

}


// function checkField(inputValue, regexValue)
// {
//     // function checkBlanks(errmsg, inputValue)
//     if ((inputValue.value == "") && (inputValue != "phone")){
//         console.log(`Please enter valid ${inputValue.id} \n`)
//         inputValue.style.borderColor == "red"
//     } 
//     else if ((inputValue.value.length > 0)){    
//             if(validInput(regexValue, inputValue)) 
//             { 
//                 console.log({inputValue: inputValue.value})
//                 openModal
//             }           
//         }  
// }
function openModal(){
    body.classList.add("modal-active")
    overlay.classList.remove("hidden")
    modal.classList.remove("hidden")
    buttonoverlay.classList.remove("hidden")
}
// close modal on clicking the close button/enter
function closeModal(){
    body.classList.remove("modal-active")
    overlay.classList.add("hidden")
    modal.classList.add("hidden")
    form.reset()
}
closebutton.onclick = closeModal