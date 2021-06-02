//When page load we initially hidding the label field
const inputs=document.getElementsByClassName('inputfield');
for(let i=0;i<inputs.length;i++){
        if(inputs[i].getAttribute('placeholder') && inputs[i].value===""){
            document.getElementsByClassName('labelname')[i].style.display="none";
        }
}
//when we come out of I/P field label should be on the border if we enter a I/P value else label should be hidded
function getBlured(input){
    for(let i=0;i<inputs.length;i++){
        if(inputs[i]===input){
            if(inputs[i].getAttribute('placeholder') && inputs[i].value===""){
                document.getElementsByClassName('labelname')[i].style.display="none";
            }
        }
    }
}
//when fousing on I/P placeholder should be hidded and label should be on the border
function getFocused(input){
    for(let i=0;i<inputs.length;i++){
        if(inputs[i]===input){
            document.getElementsByClassName('labelname')[i].style.display="block";
        }
    }
}
//client side validation
function validation(){
    const name=document.getElementById("name");//user field
    const gender=document.getElementsByName("gender");//gender field
    const ctc=document.getElementById('ctc')//ctc field
    //name field should be of alphabets and .
    const namepattern=/^[A-Za-z.]+$/g;
    if(!name.value.match(namepattern)){
        alert("Name field should contain alphabets and .")
        return false
    }
    let flag=false;//for checking radio button is checked or not
    for(var buttons of gender){
        if(buttons.checked===true){
            flag=true;
            break
        }
    }
    if(flag===false){
        alert("Please select gender")
        return false
    }
    //ctc validation
    const ctcPattern=/^[\d][A-Za-z]+$/g
    if(!ctc.value.match(ctcPattern)){
        alert("Enter Correct Value in CTC field")
        return false
    }
    alert("Form validating Successfull!")
    return false
}
