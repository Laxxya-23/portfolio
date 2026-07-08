/*=========================================
            PORTFOLIO JS
=========================================*/


/*=========================
TYPEWRITER EFFECT
=========================*/

const typing = document.getElementById("typing");

const words = [

    "Full Stack Web Developer",

    "UI Designer",


];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();



/*=========================
SCROLL PROGRESS BAR
=========================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});



/*=========================
BACK TO TOP
=========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
        CUSTOM CURSOR
=========================================*/

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cursorDot.style.left = x + "px";
    cursorDot.style.top = y + "px";

    cursorOutline.animate(
        {
            left: x + "px",
            top: y + "px"
        },
        {
            duration: 250,
            fill: "forwards"
        }
    );

});


/*=========================================
        CURSOR HOVER EFFECT
=========================================*/

const hoverItems = document.querySelectorAll(
"a,button,.skill-card,.service-card,.project-card"
);

hoverItems.forEach((item)=>{

    item.addEventListener("mouseenter",()=>{

        cursorOutline.style.width="60px";
        cursorOutline.style.height="60px";
        cursorOutline.style.borderColor="#4F7DF3";

    });

    item.addEventListener("mouseleave",()=>{

        cursorOutline.style.width="35px";
        cursorOutline.style.height="35px";
        cursorOutline.style.borderColor="rgba(255,255,255,.5)";

    });

});


/*=========================================
        STICKY NAVBAR
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(8,18,29,.85)";
        navbar.style.backdropFilter="blur(25px)";
        navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";

    }

    else{

        navbar.style.background="rgba(255,255,255,.06)";
        navbar.style.boxShadow="none";

    }

});


// /*=========================================
//         MOBILE MENU
// =========================================*/

// const menuBtn=document.querySelector(".menu-btn");

// const navLinks=document.querySelector(".nav-links");

// menuBtn.addEventListener("click",()=>{

//     navLinks.classList.toggle("showMenu");

// });


/*=========================================
        ACTIVE NAV LINK
=========================================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/*=========================================
        SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
    ".section,.skill-card,.service-card,.project-card,.about-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

revealElements.forEach(element=>{

    element.classList.add("hidden");

    revealObserver.observe(element);

});


/*=========================================
        CARD TILT EFFECT
=========================================*/

const cards=document.querySelectorAll(

".skill-card,.service-card,.project-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*16;

const rotateX=((y/rect.height)-0.5)*-16;

card.style.transform=`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0) rotateY(0)";

});

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

const buttons=document.querySelectorAll(

".primary-btn,.secondary-btn,.hire-btn,.resume-btn,.project-buttons a"

);

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*=========================================
        IMAGE PARALLAX
=========================================*/

const heroImage = document.querySelector(".about-image");


/*=========================================
        CURRENT YEAR
=========================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = document.getElementById("submitBtn");

        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        const formData = {

            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value

        };

        try {

            const response = await fetch("/api/contact", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)

            });

            const data = await response.json();

            if (data.success) {

                alert("✅ Message Sent Successfully!");

                contactForm.reset();

            } else {

                alert("❌ " + data.message);

            }

        } catch (error) {

            console.error(error);

            alert("❌ Server Error");

        }

        submitBtn.innerText = "Send Message";
        submitBtn.disabled = false;

    });

}