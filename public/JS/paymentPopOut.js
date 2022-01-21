let popConatinerOnPaymentPageMainHead1=document.querySelector(".popConatinerOnPaymentPageMainHead1")
let ChangeContent1=document.querySelector(".ChangeContent1")
let ChangeContent2=document.querySelector(".ChangeContent2")
popConatinerOnPaymentPageMainHead1.onclick=()=>{
    ChangeContent1.style.display="block";
    popConatinerOnPaymentPageMainHead1.style.textDecoration="underline"
    popConatinerOnPaymentPageMainHead1.style.textDecorationThickness="3px"
    popConatinerOnPaymentPageMainHead1.style.textDecorationColor="#00d09c"
    popConatinerOnPaymentPageMainHead1.style.textUnderlineOffset="15px"
    popConatinerOnPaymentPageMainHead2.style.textDecoration="none"
    ChangeContent2.style.display="none"
}
let popConatinerOnPaymentPageMainHead2=document.querySelector(".popConatinerOnPaymentPageMainHead2")
popConatinerOnPaymentPageMainHead2.onclick=()=>{
    ChangeContent2.style.display="block"
    popConatinerOnPaymentPageMainHead2.style.textDecoration="underline"
    popConatinerOnPaymentPageMainHead2.style.textDecorationThickness="3px"
    popConatinerOnPaymentPageMainHead2.style.textDecorationColor="#00d09c"
    popConatinerOnPaymentPageMainHead2.style.textUnderlineOffset="15px"
    popConatinerOnPaymentPageMainHead1.style.textDecoration="none"
    ChangeContent1.style.display="none"
}

let withdrawBtn=document.getElementById("changebg")
let inp=document.querySelector(".EnterAmount")

function changeBg(){
    if(inp===""){
        withdrawBtn.style.backgroundColor="#70727c"
        withdrawBtn.style.opacity=".4"
    }
    withdrawBtn.style.backgroundColor="#00d09c"
    withdrawBtn.style.opacity="1"
}

document.querySelector(".depositBt").onclick=()=>{
    alert("Your Payment has been succesfully processed")

    window.location.href="Home"
}