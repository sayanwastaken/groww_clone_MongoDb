// js for modal starts here------------------------

const openModalButton = document.querySelectorAll("[data-modal-target]");
const closeModalButton = document.querySelectorAll("[data-close-button]");

const overlay = document.querySelector("#overlay");

openModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);

    openModal(modal);
  });
});

closeModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");

    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;

  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;

  modal.classList.remove("active");
  overlay.classList.remove("active");
}

//js for modal finishes here---------------------

//js for login starts below --------------------------------

const email_input = document.querySelector("#login-mail");

email_input.addEventListener("keypress", (e) => {
  loginFn(e);
});

async function loginFn(e) {
    
  if (e.key == "Enter") {
    if(email_input.value.length==0){
        let email_valid=document.getElementById("email-validationText");
        email_valid.style.opacity="1"
    }else{
        let email_valid=document.getElementById("email-validationText");
        email_valid.style.opacity="0"
        let otp=Math.floor(Math.random()*(9999-1000+1)+1000);
        alert("sending otp in 5 seconds")
        const myPromise= new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(alert(`your otp is ${otp}`))
            },5000)
        })
        document.getElementById("inputDiv").innerHTML=null

        let otpInput=document.createElement("input")
        otpInput.type="text"
        otpInput.classList.add("login-otp")
        otpInput.setAttribute("id","login-otp")
        otpInput.setAttribute("placeholder","Enter OTP");
        let h5=document.createElement("h5")
        h5.textContent="Wrong OTP Number please close this box and try again"
        h5.setAttribute("id","otp-validationText")
        let div=document.createElement("div")
        div.classList.add("login-btnDiv")
        let btn=document.createElement("button")
        btn.classList.add("login-btn")
        btn.setAttribute("id","login-btn")
        btn.textContent ="Continue"
        div.append(btn)
        let div2=document.createElement("div")
        div2.classList.add("login-tc")
        div2.innerHTML=`<p>By proceeding, I agree to <b><u>T&C</u></b> and <b><u>Privacy policy</u></b></p>`
        document.getElementById("inputDiv").append(otpInput,h5,div,div2)
        let res=await myPromise

        document.getElementById("login-btn").addEventListener("click",()=>{
          let otp_val=document.getElementById("login-otp").value;
          let otp_validation=document.getElementById("otp-validationText")

          if(otp_val.length==0 || otp_val!=otp){
              otp_validation.style.opacity="1"
              return;
          }
          var user=email_input.value
          localStorage.setItem("userId",JSON.stringify(user))
              alert("Login Success!")

              window.location.href="Home"
        })
    }
  }
}

document.getElementById("mfdiv").onclick=()=>{
  window.location.href="Home"
}

//login validation js finishes here -----------=