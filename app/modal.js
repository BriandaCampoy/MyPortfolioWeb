const folder = document.getElementById('folderPlatzi');
const modal = document.getElementById('modal-platzi');
const closeModal = document.getElementById('return');

folder.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('show');
});

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('show');
});