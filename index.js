const modal = document.getElementById('simple-modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.getElementById('close-butn');

modalBtn.addEventListener('click',openModal)
function openModal(){
    modal.style.display = 'block'
}

closeBtn.addEventListener('click',closeModal)
function closeModal(){
    modal.style.display = 'none'
}
    

window.addEventListener('click',cliclOutSide)
function cliclOutSide(e){
    if (e.target == modal){
        modal.style.display = 'none'
    }
}