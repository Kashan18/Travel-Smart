(() =>{
 
    const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
  
    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);
    // close the navMenu by clicking outside
    menuOverlay.addEventListener("click", toggleNav);
  
    function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
  
    navMenu.addEventListener("click", (event) =>{
        if(event.target.hasAttribute("data-toggle") && 
            window.innerWidth <= mediaSize){
            // prevent default anchor click behavior
            event.preventDefault();
            const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if(menuItemHasChildren.classList.contains("active")){
              collapseSubMenu();
          }
          else{
            // collapse existing expanded menuItemHasChildren
            if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
    });
    function collapseSubMenu(){
        navMenu.querySelector(".menu-item-has-children.active .sub-menu")
        .removeAttribute("style");
        navMenu.querySelector(".menu-item-has-children.active")
        .classList.remove("active");
    }
    function resizeFix(){
         // if navMenu is open ,close it
         if(navMenu.classList.contains("open")){
             toggleNav();
         }
         // if menuItemHasChildren is expanded , collapse it
         if(navMenu.querySelector(".menu-item-has-children.active")){
              collapseSubMenu();
       }
    }
  
    window.addEventListener("resize", function(){
       if(this.innerWidth > mediaSize){
           resizeFix();
       }
    });
  
  })();


// REVEAL ELEMENT ON SCROLL 

  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.box1')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show1')
      } else {
        entry.target.classList.remove('show1')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.amazing')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show2')
      } else {
        entry.target.classList.remove('show2')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.button1')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show3')
      } else {
        entry.target.classList.remove('show3')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.box2')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate1')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate2')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate3')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate4')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate5')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate6')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate7')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate8')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animate9')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animateIcon1')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.my-2')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show4')
      } else {
        entry.target.classList.remove('show4')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animateButton')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show5')
      } else {
        entry.target.classList.remove('show5')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.animateImage')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime1')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime2')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime3')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-img1')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-img2')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-img3')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show7')
      } else {
        entry.target.classList.remove('show7')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime4')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show7')
      } else {
        entry.target.classList.remove('show7')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime5')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show7')
      } else {
        entry.target.classList.remove('show7')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime6')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show7')
      } else {
        entry.target.classList.remove('show7')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime7')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show7')
      } else {
        entry.target.classList.remove('show7')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime8')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime10')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime11')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show6')
      } else {
        entry.target.classList.remove('show6')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-anime12')
  hiddenElements.forEach((el) => observer.observe(el));


  var observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show8')
      } else {
        entry.target.classList.remove('show8')
      }
    });
  });
  
  var hiddenElements = document.querySelectorAll('.acc-Accordian')
  hiddenElements.forEach((el) => observer.observe(el));


