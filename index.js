const modalBtn = document.querySelector(`.modal-btn`)
const overlay = document.querySelector(`.overlay`)
const xBtn = document.querySelector(`.x-btn`)

console.log(modalBtn)
console.log(overlay)
console.log(xBtn)

modalBtn.addEventListener(`click`, function() {
    overlay.classList.add(`open-model`)
    console.log(overlay.classList)
})

xBtn.addEventListener(`click`, function() {
    overlay.classList.remove(`open-model`)
    console.log(overlay.classList)

})