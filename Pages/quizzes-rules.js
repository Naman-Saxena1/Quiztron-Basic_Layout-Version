let modal = document.querySelector(".modal-container")
let modalActionBtn = document.querySelectorAll(".modal-action-btn")
let closeModalBtn = document.querySelector(".close-modal-btn")
let acceptRulesCheckbox = document.querySelector("#accept-rules-checkbox")

function openModal()
{
    modal.style.display="block"
}
openModal()

acceptRulesCheckbox.addEventListener('click',()=>{
    if(acceptRulesCheckbox.checked)
    {
        modalActionBtn[0].removeAttribute('disabled')
    }
    else
    {
        modalActionBtn[0].setAttribute('disabled',"true")
    }
})


modalActionBtn.forEach((actionBtnElement)=>{
    actionBtnElement.addEventListener('click',()=>{
        modal.style.display="none"
    })
})