window.addEventListener('DOMContentLoaded', function(){
 
    
    const menu = document.querySelector('#rec283122312'); 
        menu.style.position = 'fixed';
        menu.style.width = '100%';
        menu.style.top = '0px';
        menu.style.zIndex = '999';
        menu.style.pointerEvents = 'none';

    const mainBg = document.querySelector('#rec283142824'); 
        mainBg.style.position = 'fixed';
        mainBg.style.width = '100%';
        mainBg.style.top = '0px';
        mainBg.style.zIndex = '-1';

    
    
    const controlWrapeprq = document.createElement('div');
    controlWrapeprq.classList.add('controlWrapper');
    menu.append(controlWrapeprq);
    
    class navLinks{
        constructor(title, link, parentSelector, classes){
            this.title = title;
            this.link = link;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }
    
        render(){
            const elem = document.createElement('a');
            this.elem = 'nav_links';
            elem.classList.add(this.elem);
    
            elem.setAttribute('href', this.link);
            elem.innerText = `${this.title}`;
    
            this.parent.append(elem);
        }
    }
    
    new navLinks(
        'Welcome',
        '#rec283105271',
        '.controlWrapper',
        'nav_links' 
    ).render();
 
    new navLinks(
        'WORKS',
        '#rec283139537',
        '.controlWrapper',
        'nav_links' 
    ).render();
    
    new navLinks(
        'SERVICES',
        '#rec283156643',
        '.controlWrapper',
        'nav_links' 
    ).render();
    
    new navLinks(
        'LEADERS',
        '#rec283158483',
        '.controlWrapper',
        'nav_links' 
    ).render();
    
    new navLinks(
        'CONNECT',
        '#rec283162406',
        '.controlWrapper',
        'nav_links' 
    ).render();
    
    
    const navLinksMenu = document.querySelectorAll('.nav_links'); 
    const navLine = document.querySelector('.nav_line_active');
    const navDot = document.querySelector('.nav_dot'); 
 
    navDot.style.transition = '0.3s all';
        
    const newActiveLine = document.createElement('div');
    navDot.append(newActiveLine);
    
    newActiveLine.style.width = '1px';
    newActiveLine.style.background = '#fff';
    newActiveLine.style.height = '100vh';
    newActiveLine.style.position = 'absolute';
    newActiveLine.style.right = '6px';
    newActiveLine.style.transform = 'translateY(-100%)';

    navDot.style.transition = '0.3s all';  
    
    
    
    setNavLinksActive(0);

    

    function setNavLinksInactive(){ 
        navLinksMenu.forEach(elem =>{ 
            elem.style.removeProperty('opacity'); 
        });  
    }

    function setNavLinksActive(index){ 
        navLinksMenu[index].style.opacity = '1';
    }

    window.addEventListener('scroll', function(){
        let windowHeight =  window.innerHeight;
        let scrollToTop = document.documentElement.scrollTop;
        let index =  scrollToTop / windowHeight + 1;  
 
        switch (Math.floor(index)){
            case 1: 
                navDot.style.top = `${controlWrapeprq.offsetTop + navLinksMenu[0].offsetTop}px`; 
                navLine.style.height = `${navLinksMenu[0].offsetTop+8}px`;
                setNavLinksInactive();
                setNavLinksActive(0);
                break;

            case 2: 
                navDot.style.top = `${controlWrapeprq.offsetTop +navLinksMenu[1].offsetTop}px`; 
                navLine.style.height = `${navLinksMenu[1].offsetTopp+8}px`;
                setNavLinksInactive();
                setNavLinksActive(1);
                break;

            case 3: 
                navDot.style.top = `${controlWrapeprq.offsetTop +navLinksMenu[2].offsetTop}px`; 
                navLine.style.height = `${navLinksMenu[2].offsetTop+8}px`;
                setNavLinksInactive();
                setNavLinksActive(2);
                break;

            case 4:
                navDot.style.top = `${controlWrapeprq.offsetTop +navLinksMenu[3].offsetTop}px`; 
                navLine.style.height = `${navLinksMenu[3].offsetTop+8}px`;
                setNavLinksInactive();
                setNavLinksActive(3);
                break;

            case 5:
                navDot.style.top = `${controlWrapeprq.offsetTop +navLinksMenu[4].offsetTop}px`; 
                navLine.style.height = `${navLinksMenu[4].offsetTopp+8}px`;
                setNavLinksInactive();
                setNavLinksActive(4);
                break;
        }  
    });
    
    //SIDE MENU
    
    const sideMenu = document.querySelector('#rec283256679');
    const openMenu = document.querySelector('.open_menu');
    
    openMenu.style.pointerEvents = 'auto';
    sideMenu.classList.add('hide_side_menu');
    
    const closeMenu = document.querySelectorAll('.close_side_menu');
    
    openMenu.addEventListener('click', (e)=>{
        e.preventDefault();
        sideMenu.style.right = '0%';
        let bodySite = document.querySelector('.t-body');
        bodySite.style.overflow = 'hidden';
    });
    
    
    closeMenu.forEach(elem =>{
        elem.addEventListener('click',  (e)=>{
            e.preventDefault();
            sideMenu.style.right = '-100%';
            let bodySite = document.querySelector('.t-body');
            bodySite.style.overflow = '';
        });
    });
});