//Let's bring all panels in our JS file with querySelectorAll methode
const panels = document.querySelectorAll('.panel')

panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active');
    })
})

function removeActiveClasses(panel){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}