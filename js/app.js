const expandingCards = () =>{
    const panels = document.querySelectorAll('.pnale');
    const removeActiveClass = () => panels.forEach(panel =>{
        panel.classList.remove('active');
    });
    panels.forEach(panel =>{
        panel.addEventListener('click', () =>{
            console.log('ok')
            removeActiveClass();
            panel.classList.add('active');
        });
    })
}
expandingCards();