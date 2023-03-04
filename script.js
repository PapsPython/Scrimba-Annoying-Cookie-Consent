
const modal = document.getElementById("modal")
const consentForm = document.getElementById("consentform")
const modalText = document.getElementById("modal-text")
const closeBtn = document.getElementById("modal-close-btn")
const declineBtn = document.getElementById("decline-btn")
const modalBtn = document.getElementById("modal-choice-btns")

function popupmodal(){
   modal.style.display="block"
}

function acceptTerms(e){
  e.preventDefault()

  const consentFormData = new FormData(consentForm)

  const name = consentFormData.get("fullName")
   console.log(name)
  modalText.innerHTML = 
  `
 <div class="modal-inner-loading"> 
  <img src="Ellipsis-1s-200px.svg" alt ="loading-image" class="ellipses ">

  <p class="modal-display-name" id="changingtext"> Uploading your data to the dark web... </p>
</div>  
  ` 
setTimeout(function(){
  document.getElementById("changingtext").textContent="Making the Sale ...."
},5000) 

setTimeout(function(){
  document.getElementById("modal-inner").innerHTML =`
  <div>
  <p> Thank you <span class="modal-display-name">${name} </span> for the data sucker</p>
   <p> Here we are selling the rights to your soul</p>
  <div>
   <img src="pirate-laughing.gif" alt="laughingpirate">
  </div>   
  `
  closeBtn.disabled =false
},7000)  
 
}

function switchButton(e){
  console.log("hover")
  modalBtn.classList.toggle("switch")
}

function closeModal(){
  modal.style.display="none"
}


setTimeout(popupmodal,5000)

declineBtn.addEventListener("mouseenter",switchButton)
consentForm.addEventListener("submit",acceptTerms)
closeBtn.addEventListener("click",closeModal)