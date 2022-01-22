let clicKtoChangeTypeOfshare= document.querySelector(".clicKtoChangeTypeOfshare")
let clickTOchange=document.getElementsByClassName("clickTOchange")
let underLineArr=Array.from(clickTOchange)
underLineArr[0].style.borderBottom="2px solid #00d09c";

let clicKtoChangeTypeOfshareInterest=document.getElementsByClassName("clicKtoChangeTypeOfshareInterest")
let arr=["/mainpage/fd.png","/mainpage/fund.png","/mainpage/stock.png","/mainpage/usstock.png"]
let rateArr=["/mainpage/r1.png","/mainpage/r2.png","/mainpage/r3.png","/mainpage/r4.png"]
clicKtoChangeTypeOfshare.src=arr[0]
Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[0]
//console.log(clicKtoChangeTypeOfshareInterest[0]);
Array.from(clickTOchange)[0].onclick=()=>{
    clicKtoChangeTypeOfshare.src=arr[0]
    underLineArr[0].style.borderBottom="2px solid #00d09c"
    Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[0]
    underLineArr[1].style.borderBottom="none"
    underLineArr[2].style.borderBottom="none"
    underLineArr[3].style.borderBottom="none"
}
Array.from(clickTOchange)[1].onclick=()=>{
    clicKtoChangeTypeOfshare.src=arr[1]
    underLineArr[1].style.borderBottom="2px solid #00d09c"
    Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[1]
    underLineArr[0].style.borderBottom="none"
    underLineArr[2].style.borderBottom="none"
    underLineArr[3].style.borderBottom="none"
}
Array.from(clickTOchange)[2].onclick=()=>{
    clicKtoChangeTypeOfshare.src=arr[2]
    underLineArr[2].style.borderBottom="2px solid #00d09c"
    Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[2]
    underLineArr[0].style.borderBottom="none"
    underLineArr[1].style.borderBottom="none"
    underLineArr[3].style.borderBottom="none"
}
Array.from(clickTOchange)[3].onclick=()=>{
    clicKtoChangeTypeOfshare.src=arr[3]
    underLineArr[3].style.borderBottom="2px solid #00d09c"
    Array.from(clicKtoChangeTypeOfshareInterest)[0].src=rateArr[3]
    underLineArr[0].style.borderBottom="none"
    underLineArr[1].style.borderBottom="none"
    underLineArr[2].style.borderBottom="none"
}

// CreateAccountForFree ...change href 

