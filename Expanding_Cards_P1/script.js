let panels=document.querySelectorAll('.panel');

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveElements();
        panel.classList.add('active');
    })
});
function removeActiveElements(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    });
}