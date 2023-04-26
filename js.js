const names=document.getElementById('name')
const email=document.getElementById('email')
const phoneNumber=document.getElementById('phoneNumber')

let EError=document.getElementsByClassName('EmailError')[0]

let nameError=document.getElementsByClassName('nameError')[0]

let phoneError=document.getElementsByClassName('phoneError')[0]

const empty=""

// to test the email format as it is being typed

email.addEventListener("input",(e)=>{
    const emailInput=e.target.value
    const emailInputRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    inputRegexTest=emailInputRegex.test(emailInput)
    
    if (inputRegexTest){
        
            EError.style.display='none'
            email.style.border="solid 2px green"
        }else{
            EError.style.display='block'
        }
})

names.addEventListener("input",(e)=>{
    const nameInput=e.target.value
    
    if (nameInput !=empty){
        
            nameError.style.display='none'
            names.style.border="solid 2px green"
        }else{
            EError.style.display='block'
        }
})



// phone number check
phoneNumber.addEventListener("input",(e)=>{
    const phoneInput=e.target.value
    
    if (phoneInput !=empty){
        
            phoneError.style.display='none'
            names.style.border="solid 2px green"
        }else{
            phoneError.style.display='block'
        }
})



const submit=document.getElementsByTagName('button')[0]
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    inputCheck()
    
} )


function inputCheck(){
 
  
// const emailValue=email.value.trim()       
}

//Submission success message
let submission=document.getElementsByClassName('Submission')[0]
if(inputRegexTest && phoneNumberGood && namesCorrect ){
    submission.style.display='block'
    console.log('yes')
}else{
    submission.style.display='none'
    console.log('kilode')
}



