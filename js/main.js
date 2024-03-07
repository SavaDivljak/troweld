// dinamički ispis (od sada "di") linkova u heder i "info_section" //

let navPages = [
    {
        class: "nav-link home",
        part: "",
        text: "Home",
    },
    {
        class: "nav-link",
        part: "#about",
        text: "About",
    },
    {
        class: "nav-link",
        part: "#portfolio",
        text: "Portfolio",
    },
    {
        class: "nav-link",
        part: "#services",
        text: "Services"
    },
    {
        class: "nav-link",
        part: "#news",
        text: "News",
    },
    {
        class: "nav-link",
        part: "#contact",
        text: "Contact",
    },
    {
        class: "nav-link",
        part: "#testimonials",
        text: "Testimonials",
    },
];

for(let link of navPages){

    let menu = `<li class="nav-item"><a class="${link.class}" href="index.html${link.part}">${link.text}</a></li>`;
    let footlinks = `<li><a href="index.html${link.part}">${link.text}</a></li>`;
    document.querySelector(".navbar-nav").innerHTML += menu;
    document.querySelector(".navigation").innerHTML += footlinks;
}

// di ikonica socijalne mreže //

let social = [
    {
        class: "fa fa-facebook",
        url: "facebook"
    },
    {
        class: "fa fa-instagram",
        url: "instagram"
    },
    {
        class: "fa fa-linkedin",
        url: "linkedin"
    },
    {
        class: "fa fa-youtube",
        url: "youtube"
    }
];

for(let icon of social){
    let socialTrack = `<a href="https://www.${icon.url}.com/"><i class="${icon.class}"></i></a>`;
    document.querySelector(".social_box").innerHTML += socialTrack;
}

// di servisa u "service_section" //

let services = [
    {
        img: "s1",
        title: "Home welding",
        text: "Elevate your living space with our precise home welding services, blending functionality and aesthetics seamlessly."
    },
    {
        img: "s2",
        title: "Gate welding",
        text: "Elevate your living space with our precise home welding services, blending functionality and aesthetics seamlessly."
    },
    {
        img: "s3",
        title: "Window welding",
        text: "Elevate your living space with our precise home welding services, blending functionality and aesthetics seamlessly."
    },
    {
        img: "s4",
        title: "Machine welding",
        text: "Elevate your living space with our precise home welding services, blending functionality and aesthetics seamlessly."
    },
    {
        img: "s5",
        title: "Bike welding",
        text: "Elevate your living space with our precise home welding services, blending functionality and aesthetics seamlessly."
    },
    {
        img: "s6",
        title: "Car welding",
        text: "Elevate your living space with our precise home welding services, blending functionality and aesthetics seamlessly."
    }
];

let serviceCard = "";
let serviceBlock = document.querySelector(".service");
for (let service of services) {
    
    serviceCard += `<div class="col-sm-6 col-md-4 fade-in">
        <div class="box">
            <div class="img-box">
                <img src="images/${service.img}.png" alt="${service.title} icon" />
            </div>
            <div class="detail-box">
                <h5>${service.title}</h5>
                <p>${service.text}</p>
                <button class="service-button mt-3">View more</button>
            </div>
        </div>
    </div>`;
    console.log(serviceCard);
    
}
serviceBlock.innerHTML = serviceCard;



// di korisni linkovi u "info_secction" //

let usefulLinks = [
    {
        url: "dokumentacija.pdf",
        text: "Documentation"
    },
    {
        url: "sitemap.xml",
        text: "Sitemap"
    },
    {
        url: "rss.xml",
        text: "RSS Feed"
    },
    {
        url: "",
        text: "Author"
    },
];

for(i = 0; i < 4; i++){
    let linkList = "";
    if(i == 3){
        linkList = `<li><button class="author">${usefulLinks[i]['text']}</button></li>`
    }
    else{
    linkList = `<li><a href="${usefulLinks[i]['url']}">${usefulLinks[i]['text']}</a></li>`;
    }
    document.querySelector(".useful-links").innerHTML += linkList;
}

// di ikonice kontakt info u "info_section" //

let conIcons = [
    {
        class: "fa fa-map-marker",
        text: "256 Broadway, New York"
    },
    {
        class: "fa fa-phone",
        text: "+01 1234567"
    },
    {
        class: "fa fa-envelope",
        text: '<a href="mailto:troweld@gmail.com">troweld@gmail.com</a>'
    }
]
for(let conIcon of conIcons){
    let conList = `<div class="col-md-4 d-flex justify-content-around align-content-start flex-wrap"><span class="link-box"><i class="${conIcon.class}"></i><span>${conIcon.text}</span></div>`
    document.querySelector(".con-list").innerHTML += conList;
}

// di dropdaun lista //

let options = ["Select service", "Home welding", "Gate welding", "Window welding", "Machine welding", "Bike welding", "Car welding"];

for(i = 0; i < options.length; i++){
    let list = `<option value="${i}">${options[i]}</option>`;
    document.querySelector(".wide").innerHTML += list;
}

// di gender radiji //

let genders = [
    {
        id: "m",
        label: "Male"
    },
    {
        id: "f",
        label: "Female"
    },
    {
        id: "o",
        label: "Other"
    },
]

for(let gender of genders){
    let radios = `<div class="gen-radio">
    <input type="radio" class="radio" name="radioB" id="${gender.id}"/>
    <label for="${gender.id}">${gender.label}</label>
    </div>`;
    document.querySelector('.gender').innerHTML += radios;
}

// di testimonal swiper sadržај //

let testimonials = [
    {
        img: "person1",
        alt: "Person 1",
        text: "Impressed with the meticulous work of Troweld in reinforcing our home's structure; their home welding service truly transformed our living space.",
        fullName: "Alexander<br/>Jonson"
    },
    {
        img: "person2",
        alt: "Person 2",
        text: "Thrilled with the personalized touch Troweld brought to my bike; their bike welding service turned my motorcycle into a true reflection of my style.",
        fullName: "Alexia<br/>Johnson"
    },
    {
        img: "person3",
        alt: "Person 3",
        text: "The gate welding service from Troweld not only secured our property but also added an elegant touch; exceptional craftsmanship and reliability.",
        fullName: "Alex<br/>Jonsonovich"
    },
]

for(let testimonial of testimonials){
    let ratings = `<div class="swiper-slide">
    <div class="box col-9 mx-auto p-2 mb-3">
      <div class="client_id">
        <div class="img-box">
          <img src="images/${testimonial.img}.jpg" alt="${testimonial.alt}" />
        </div>
        <h5 class="font-weight-bold">${testimonial.fullName}</h5>
      </div>
      <div class="detail-box">
        <p>${testimonial.text}</p>
      </div>
    </div>
    </div>`
    document.querySelector('.swiper-wrapper').innerHTML += ratings;
}

// di novosti u section "news" //

let news = [
    {
        img: "new1",
        alt: "Welding facility",
        title: "Troweld Expands Operations with New State-of-the-Art Welding Facility"
    },
    {
        img: "new2",
        alt: "Welding training program",
        title: "Troweld Launches Innovative Welding Training Program for Aspiring Welders"
    },
    {
        img: "new3",
        alt: "Welding art project",
        title: "Troweld Wins Excellence Award for Welding Craftsmanship"
    }
]

for(let breaking of news){
    let newsCards = `<div class="col-sm-8 col-md-4 fade-in mx-auto mt-3">
    <div class="card">
    <img class="card-img-top" src="images/${breaking.img}.jpg" alt="${breaking.alt}">
    <div class="card-body">
      <p class="card-title fw-bold">${breaking.title}</p>
      <a href="index.html#" class="btn btn-primary">View more</a>
    </div>
  </div>
  </div>`;
  document.querySelector('.news').innerHTML += newsCards;
}

// di q&a //

let qandas = [
    {
        question: "What types of welding services does Troweld offer?",
        answer: "Troweld provides a comprehensive range of welding services including home welding, gate welding, window welding, machine welding, bike welding, and car welding."
    },
    {
        question: "How does Troweld ensure the quality and reliability of its welding work?",
        answer: "At Troweld, we ensure quality and reliability by employing highly skilled welders, investing in state-of-the-art equipment and techniques, and adhering to strict quality control measures throughout every project."
    },
    {
        question: "Can Troweld handle both small-scale repairs and large-scale fabrication projects?",
        answer: "Yes, Troweld is equipped to handle projects of all sizes, from minor repairs to major fabrication projects. Our skilled team has the expertise and capabilities to meet the diverse needs of our clients."
    },
    {
        question: "How can I get started with Troweld for my welding project?",
        answer: "Getting started with Troweld is easy! Simply contact us through our website or give us a call to discuss your project needs and schedule a consultation. We'll work with you every step of the way to bring your welding project to life with precision and excellence."
    }
]

for (let qanda of qandas){
    let qParts = `<div class="qanda w-100">
        <h6 class="question w-100 fw-bold"><span>&#9654;</span> ${qanda.question}</h6>
        <p class="w-100">${qanda.answer}</p>
    </div>`
    document.querySelector('.qandas').innerHTML += qParts;
}

// di portfolio dugmići i slike //

let portButtons = ["Decorative", "Facades", "Perforated", "Railings"];

for(i = 0; i < portButtons.length; i++){
    let buttonSet = `<button class="item" id="${portButtons[i]}">${portButtons[i]}</button>`;
    document.querySelector('.owl-filter-bar').innerHTML += buttonSet;
}

for(i = 0; i < 3; i++){
    let portImgs = `<div class="col-md-4 col-sm-8 mx-auto mt-3 port-proj position-relative">
        <div class="desc d-flex justify-content-center align-items-center position-absolute" id="desc${i+1}">
            <p>Decorative project ${i+1}</p>
        </div>
        <img class="w-100 h-100 position relative" id="port-img${i+1}" src="images/decorative${i+1}.jpg" alt="Welding decorative ${i+1}"/>
        <div class="img-caption d-flex justify-content-center align-items-center"></div>
        </div>`;
    document.querySelector('.port-row').innerHTML += portImgs;
}

// di counter blokovi //

let countData = [
    {
        numba: "0",
        text: "Projects completed",
        endNumba: "1200",
        icon: '<i class="fa-solid fa-check"></i>'
    },
    {
        numba: "0",
        text: "Happy clients",
        endNumba: "3000",
        icon: '<i class="fa-solid fa-face-smile"></i>'
    },
    {
        numba: "0",
        text: "Our staff",
        endNumba: "240",
        icon: '<i class="fa-solid fa-person"></i>'
    },
    {
        numba: "0",
        text: "Awards won",
        endNumba: "15",
        icon: '<i class="fa-solid fa-award"></i>'
    }
]

for(let data of countData){
    let counters = `<div class="col-md-3 col-sm-6 mx-auto mt-3 d-flex flex-column justify-content-between align-items-center">
        ${data.icon}
        <h3 class="numba" data-value="${data.endNumba}">${data.numba}</h3>
        <p>${data.text}</p>
    </div>`;
    document.querySelector('.count').innerHTML += counters;
}

// bek tu top dugme funkcija sa jquery //

var visina = Number($('.hero_area').css('height').replace("px", ""));


$(window).scroll(function (e) {
    e.preventDefault();
    if ($(this).scrollTop() > visina) {
        $('#back').fadeIn('fast');
    } 
    else {
        $('#back').fadeOut('fast');
    }
});

$('#back').click(function(){
    $('html').animate({scrollTop: 0}, 'fast');
});

// heder postane plav kada se skroluje dole dovoljno //

var heder = document.querySelector(".header_section");
var hederVisina = Number($(heder).css('height').replace("px", ""));

window.onscroll = function() {blue()};

function blue(){
    if(document.documentElement.scrollTop > hederVisina){
        heder.classList.add("blue");
        heder.classList.remove("blur");
    }
    else{
        heder.classList.remove("blue");
        heder.classList.add("blur");
    }
}

// hamburger sa jquery //


$('#hamburger').click(function(){
    if($('.navbar-nav').css('display') == 'none'){
        $('.navbar-nav').slideToggle('fast');
    }
    else{
        $('.navbar-nav').slideToggle('fast');
    }
});

// testimonial slider jquery plugin //

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

// proširivanje bloka radi prikaza teksta za servise u service section logično sa jquery //

$('.service-button').click(function(e){
    e.preventDefault();
    if($($(this).parent().find('p')).css('display') == 'none'){
        $($(this).parent().find('p')).slideToggle('fast');
        $(this).text('View less');
    }
    else{
        $($(this).parent().find('p')).slideToggle('fast');
        $(this).text('View more');
    }
});

// preloader ekran//

var loadScreen = document.querySelector('.load-screen');

window.addEventListener("load", () => {
    loadScreen.classList.add('load-screen-done');
})

window.addEventListener("transitioned", () => {
    document.body.removeChild('load-screen');
})

// subscribe to newsletter modal posle 5 sek iskače //

var subscribeModal = setTimeout(modalAppear, 10000);

function modalAppear(){
    document.getElementById('modal1').style.display = "block";
    document.getElementById('modal1').classList.add('modal-content-appear');
}

function closeModal(event){
    let close = event.target.id;
    let closeId = close.substr(0, 6);
    let rem = document.getElementById(`${closeId}`);
    rem.style.display = "none";
}

// slider u slider_section funkcija //

let backgrounds = ["bg1", "bg2", "bg3"];

var sliderIndex = 0;
showSlide(sliderIndex);
var changing = setInterval(() => nextSlide(1), 10000);

function prevSlide(n) {
    sliderIndex += n;
    if (sliderIndex < 0) {
        sliderIndex = backgrounds.length - 1;
    }
    document.querySelector('.orange').classList.remove('orange');
    document.getElementById(`indi${sliderIndex}`).classList.add('orange');
    showSlide(sliderIndex);
}

function nextSlide(n) {
    sliderIndex += n;
    if (sliderIndex >= backgrounds.length) {
        sliderIndex = 0;
    }
    document.querySelector('.orange').classList.remove('orange');
    document.getElementById(`indi${sliderIndex}`).classList.add('orange');
    showSlide(sliderIndex);
}

function goSlide(n, event){
    sliderIndex = n;
    showSlide(sliderIndex);
    document.querySelector('.orange').classList.remove('orange');
    document.getElementById(event.target.id).classList.add('orange');
}

function showSlide(n) {
    let indicators = document.getElementsByClassName('indicator');
    document.querySelector('.hero_area').style.backgroundImage = `url("images/${backgrounds[sliderIndex]}.jpg")`;
}

window.onload = (n, event) => {
    document.getElementById(`indi0`).classList.add('orange');
}

// acordioni q&a sa jquery //

$('.question').click(function(e) {
    e.preventDefault();
    if($($(this).parent().find('p')).css('display') != 'block'){
        $('.answer-toggle').parent().find('h6 span').html('&#9654;');
        $('.answer-toggle').css('display', 'none');
        $('.answer-toggle').removeClass('answer-toggle');
    }
    if($($(this).parent().find('p')).css('display') == 'none'){
        $(this).find('span').html('&#9660;');
        $($(this).parent().find('p')).slideToggle('.7s');
        $($(this).parent().find('p')).addClass('answer-toggle');
    }
});

// fadein animacija sa jquery //

$('.heading_container').each(function(){
    $(this).addClass('fade-in');
});

$(window).scroll(function() {
    let fadeInElements = $('.fade-in');
    let pageBottom = $(window).scrollTop() + $(window).height();

    fadeInElements.each(function() {
        let divTop = $(this).offset().top + $(this).outerHeight();
        let divHeight = $(this).height();
        if (pageBottom > divTop - divHeight) {
            $(this).addClass('fade-in-after');
        }
    });
});

// modal za autora //

$('.author').click(function() {
    $('#modal2').css('display', 'block');
    $('#modal2').addClass('modal-content-appear');
});

// prikaz drugačijih slika i divova sa opisom klikom na određeno dugme u portfolio_section //

$('.item').click(function(e) {
    $('.port-active').removeClass('port-active');
    e.preventDefault();
    let portId = $(this).attr('id');
    $(this).addClass('port-active');
    for(i = 0; i < 3; i++){
        $(`#port-img${i+1}`).prop({'src': `images/${portId}${i+1}.jpg`, 'alt': `Welding ${portId} ${i+1}`});
        $(`#desc${i+1} p`).text(`${portId} project ${i+1}`);
    }
});

// jquery plugin counter //

$('.numba').each(function() {
    let maxValue = $(this).attr('data-value');
    $(this).counto(`${maxValue}`, 3000);
});


