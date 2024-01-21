document.addEventListener('DOMContentLoaded', function(){
    /* показать/скрыть мобильное меню */
    const headerMenu = document.querySelector('.header-menu');
    const MenuToggle = document.querySelector('.toggle-menu');
    const bodyEl = document.body;

    MenuToggle.addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active');
            headerMenu.classList.remove('open');
            bodyEl.classList.remove('lock');
        }
        else{
            this.classList.add('active');
            headerMenu.classList.add('open');
            bodyEl.classList.add('lock');
        }
    });

    headerMenu.addEventListener('click', function(){
        this.classList.remove('open');
        MenuToggle.classList.remove('active');
        bodyEl.classList.remove('lock');
    });
});