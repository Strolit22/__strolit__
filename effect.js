// const navLink = document.querySelectorAll("li"); 

// 			function linkAction(){
// 				/*Active link*/
// 				navLink.forEach(n => n.classList.remove('active'));
// 				this.classList.add('active');
// 			}
// 			navLink.forEach(n => n.addEventListener('click', linkAction));

/*Responsive Navigation*/
$(document).ready(function(){
	$('.toggle').click(function(){
		$('.toggle').toggleClass('active')
		 $('nav ul').toggleClass('active-menu')
   	})

	var typed = new Typed(".typing", {
        strings: ["Quang Manh", "Strolit"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

	$(window).scroll(function(){
        // sticky navbar on scroll script
        // if(this.scrollY > 20){
        //     $('.navbar').addClass("sticky");
        // }else{
        //     $('.navbar').removeClass("sticky");
        // }
        
        // scroll-up button show/hide script
        if(this.scrollY > 700){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

	$('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
	});
});

let box = document.querySelector('.box');
            window.onmousemove = function(e) {
                let x = e.clientX/3;
                box.style.transform = "perspective(1000px) rotateY(" + x + "deg) rotateX(7deg) rotateZ(7deg)"
            }

const sr = ScrollReveal({
		origin: 'top',
		distance: '80px',
		duration: 2000,
		reset: true
	});

	/*SCROLL HOME*/	
	sr.reveal('#main',{}); 
	sr.reveal('.name p',{delay: 200});
	sr.reveal('.name h1',{delay: 400});
	sr.reveal('.details',{delay: 500}); 
	sr.reveal('.cv-btn',{delay: 700}); 
	sr.reveal(' .black-line', {delay: 900});
	sr.reveal('.social',{ delay: 300}); 

	/*SCROLL ABOUT*/
	sr.reveal('.about-text h1',{}); 
	sr.reveal('.about-text h2',{delay: 200});
	sr.reveal('.about-text p',{delay: 300});
	sr.reveal('.about-model',{delay: 500}); 
	sr.reveal('.about-text button',{delay: 600}); 

	/*SCROLL SKILLS*/
	sr.reveal('.max-width h1', {});
	sr.reveal('.max-width .column.right', {delay: 400});
	sr.reveal('.max-width .column.left', {delay: 900});

	/*SCROLL SERVICES*/
	sr.reveal('.s-heading',{});  
	sr.reveal('.slide-container',{delay: 500}); 

	/*SCROLL PORTFOLIO*/
	sr.reveal('#portfolio h1',{});
	sr.reveal('#idea', {delay:400});
	sr.reveal('#time, #book', {delay:600});
	sr.reveal('#creative', {delay:800});
	sr.reveal('#writting, #music', {delay:1000});

	// SCROLL MEMORY
	sr.reveal('#memory', {});

	/*SCROLL CONTACT*/
	sr.reveal('.c-b-heading',{});
	sr.reveal('#contact-btn button', {delay: 300});

	/*SCROLL CONTACT-FORM*/
	sr.reveal('form', {});
	sr.reveal('.message', {delay: 100});
	sr.reveal('.c-l-heading', {delay: 300});
	sr.reveal('.f-name', {delay: 500});
	sr.reveal('.f-email', {delay: 600});
	sr.reveal('.contact-right button', {delay: 700});


