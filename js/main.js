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

let menuWrite = document.querySelector(".navbar-nav");

let footLinksWrite = document.querySelector(".navigation")
for(let link of navPages){
    if(menuWrite){
        let menu = `<li class="nav-item"><a class="${link.class}" href="index.html${link.part}">${link.text}</a></li>`;
        menuWrite.innerHTML += menu;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
    if(footLinksWrite){
        let footLinks = `<li><a href="index.html${link.part}">${link.text}</a></li>`;
        footLinksWrite.innerHTML += footLinks;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
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

let socialTrackWrite = document.querySelector(".social_box");

for(let icon of social){
    if(socialTrackWrite){
        let socialTrack = `<a href="https://www.${icon.url}.com/"><i class="${icon.class}"></i></a>`;
        socialTrackWrite.innerHTML += socialTrack;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
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

let serviceCardWrite = document.querySelector('.service');

for (let service of services) {
    if(serviceCardWrite){
        let serviceCard = `<div class="col-sm-6 col-md-4 fade-in">
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
        serviceCardWrite.innerHTML += serviceCard;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
}

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
        url: "author.html",
        text: "Author"
    },
];

let linkListWrite = document.querySelector(".useful-links");

for(let usefulLink of usefulLinks){
    if(linkListWrite){
        let linkList = `<li><a target="_blank" href="${usefulLink.url}">${usefulLink.text}</a></li>`;
        linkListWrite.innerHTML += linkList;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
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

let conListWrite = document.querySelector(".con-list");

for(let conIcon of conIcons){
    if(conListWrite){
        let conList = `<div class="col-md-4 d-flex justify-content-around align-content-start flex-wrap"><span class="link-box"><i class="${conIcon.class}"></i><span>${conIcon.text}</span></div>`
        conListWrite.innerHTML += conList;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
}

// di dropdaun lista //

let options = ["Select service", "Home welding", "Gate welding", "Window welding", "Machine welding", "Bike welding", "Car welding"];

listWrite = document.querySelector(".wide");

for(i = 0; i < options.length; i++){
    if(listWrite){
        let list = `<option value="${i}">${options[i]}</option>`;
        listWrite.innerHTML += list;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
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

let radiosWrite = document.querySelector('.gender');

for(let gender of genders){
    if(radiosWrite){
        let radios = `<div class="gen-radio">
        <input type="radio" class="radio" name="radioB" id="${gender.id}"/>
        <label for="${gender.id}" class="radio-label">${gender.label}</label>
        </div>`;
        radiosWrite.innerHTML += radios;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
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

let ratingsWrite = document.querySelector('.swiper-wrapper');

for(let testimonial of testimonials){
    if(ratingsWrite){
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
        ratingsWrite.innerHTML += ratings;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
}

// di novosti u section "news" //

let news = [
    {
        img: "new1",
        alt: "Welding facility",
        title: "Troweld Expands Operations with New State-of-the-Art Welding Facility",
        text: "Troweld, a leading provider of precision welding services, is proud to announce the expansion of its operations with the opening of a new state-of-the-art welding facility. The new facility boasts advanced equipment, expanded capacity, and enhanced capabilities, allowing Troweld to better serve its clients with even greater efficiency and precision. This expansion represents a significant milestone for the company and reaffirms its commitment to excellence in welding craftsmanship."
    },
    {
        img: "new2",
        alt: "Welding training program",
        title: "Troweld Launches Innovative Welding Training Program for Aspiring Welders",
        text: "Troweld is excited to announce the launch of its new welding training program aimed at aspiring welders looking to enter the industry. The program offers hands-on training, expert instruction, and real-world experience to equip participants with the skills and knowledge needed to succeed in the field of welding. With a focus on safety, quality, and craftsmanship, Troweld's training program is designed to empower the next generation of welders and promote excellence in the industry."
    },
    {
        img: "new3",
        alt: "Welding art project",
        title: "Troweld Wins Excellence Award for Welding Craftsmanship",
        text: "Troweld is proud to partner with the local community on an exciting public art project aimed at beautifying the cityscape. As part of the project, Troweld will provide welding services to fabricate and install metal sculptures designed by local artists. This collaboration highlights Troweld's commitment to supporting the arts and fostering community engagement through its expertise in precision welding. The project promises to enhance the city's cultural landscape and showcase the creativity and craftsmanship of local artists and welders alike."
    }
]

let newsCardWrite = document.querySelector('.news');
var newsIndex = 2;

for(let breaking of news){
    if(newsCardWrite){
        let newsCards = `<div class="col-sm-8 col-md-4 fade-in mx-auto mt-3">
        <div class="card">
        <img class="card-img-top" src="images/${breaking.img}.jpg" alt="${breaking.alt}">
        <div class="card-body">
        <p class="card-title fw-bold">${breaking.title}</p>
        <button id="btn${newsIndex}" class="btn btn-primary" onClick="openModal(event)">View more</button>
        </div>
    </div>
    <div id="modal${newsIndex}" class="modal">
    <div id="modal${newsIndex}-content" class="modal-content p-3 col-lg-6 col-md-8 col-sm-11 col-11 mx-auto">
      <span class="closet" id="modal${newsIndex}-close" onClick="closeModal(event)">X</span>
      <h3 class="mx-auto">${breaking.title}</h3>
      <p class="mt-3">${breaking.text}</p>
    </div>
  </div>
    </div>`;
    newsCardWrite.innerHTML += newsCards;
    newsIndex++;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
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

let qPartsWrite = document.querySelector('.qandas');

for (let qanda of qandas){
    if(qPartsWrite){
        let qParts = `<div class="qanda w-100">
            <h6 class="question w-100 fw-bold"><span>&#9654;</span> ${qanda.question}</h6>
            <p class="w-100">${qanda.answer}</p>
        </div>`
        qPartsWrite.innerHTML += qParts;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
}

// di portfolio dugmići i slike //

let portButtons = ["Decorative", "Facades", "Perforated", "Railings"];

let buttonSetWrite = document.querySelector('.owl-filter-bar');

for(i = 0; i < portButtons.length; i++){
    if(buttonSetWrite){
        let buttonSet = `<button class="item" id="${portButtons[i]}">${portButtons[i]}</button>`;
        buttonSetWrite.innerHTML += buttonSet;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
}

let portImgsWrite = document.querySelector('.port-row');

for(i = 0; i < 3; i++){
    if(portImgsWrite){
        let portImgs = `<div class="col-md-4 col-sm-8 mx-auto mt-3 port-proj position-relative">
            <div class="desc d-flex justify-content-center align-items-center position-absolute" id="desc${i+1}">
                <p>Decorative project ${i+1}</p>
            </div>
            <img class="w-100 h-100 position relative" id="port-img${i+1}" src="images/decorative${i+1}.jpg" alt="Welding decorative ${i+1}"/>
            <div class="img-caption d-flex justify-content-center align-items-center"></div>
            </div>`;
        portImgsWrite.innerHTML += portImgs;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
}

// di counter blokovi //

let countData = [
    {
        numba: "0",
        text: "Projects done",
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

let countersWrite = document.querySelector('.count');

for(let data of countData){
    if(countersWrite){
        let counters = `<div class="col-md-3 col-sm-6 mx-auto mt-3 d-flex flex-column justify-content-between align-items-center">
            ${data.icon}
            <h3 class="numba" data-value="${data.endNumba}">${data.numba}</h3>
            <p class="text-center">${data.text}</p>
        </div>`;
        countersWrite.innerHTML += counters;
    }
    else{
        console.log("Nema toga na ovoj stranici");
    }
}

// bek tu top dugme funkcija sa jquery //

$(window).scroll(function (e) {
    var visina = Number($('.hero_area').css('height').replace("px", ""));
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

// modali za news u prevodu novosti //

function openModal(event){
    event.preventDefault();
    let eventId = event.target.id;
    let lastOfNews = eventId.substr(-1);
    document.getElementById(`modal${lastOfNews}`).style.display = "block";
    document.getElementById(`modal${lastOfNews}`).classList.add('modal-content-appear');
}

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

// izračunavanje širine za opisni blok portfolio projecta sa jquery //

$(document).ready(function() {
    function resizeChangesPort() {
        var portWidth = Number($('.port-proj').css('width').replace("px", "")); 
        var portPaddingLeft = Number($('.port-proj').css('padding-left').replace("px", ""));
        var portPaddingRight = Number($('.port-proj').css('padding-right').replace("px", ""));
        var realWidth = portWidth - portPaddingLeft - portPaddingRight + "px";
        var portLeft = portPaddingLeft + "px";
        $('.desc').css('width', `${realWidth}`);
        $('.desc').css('left', `${portLeft}`);
        console.log(realWidth);
    }
    $(window).resize(resizeChangesPort);
    resizeChangesPort();
});

// regexi + obrada forme //

var fullName = document.getElementById('full-name');
var phone = document.getElementById('phon');
var email = document.getElementById('email');
var select = document.getElementById('selects');
var radio = document.getElementsByClassName('radio');
var mess = document.getElementById('mess');
var subscribe = document.getElementById('subscribe');
var footer = document.getElementById('footer');

var fullNameParent = document.querySelector('.full-name');
var phoneParent = document.querySelector('.phon');
var emailParent = document.querySelector('.email');
var selectParent = document.querySelector('.selects');
var radioParent = document.querySelector('.gender');
var messParent = document.querySelector('.mess');
var subscribeParent = document.getElementById('subscribe-parent');
var footerParent = document.getElementById('footer-parent');

var fullNameRegEx = /^[A-ZČĆĐŠŽ][a-zčćđšž]{1,15}(\s[A-ZČĆĐŠŽ][a-zčćđšž]{1,15}){1,3}$/;
var phoneRegEx = /^[+][0-9]{4,13}$/;
var emailRegEx = /^[a-z0-9]+(?:[._-][a-z0-9]+)*@(?:[a-z]{2,8}\.){1,2}[a-z]{2,8}$/

var fullNameErr = document.createElement("small");
fullNameParent.appendChild(fullNameErr);
fullNameErr.classList.add('text-danger');

var phoneErr = document.createElement("small");
phoneParent.appendChild(phoneErr);
phoneErr.classList.add('text-danger');

var emailErr = document.createElement("small");
emailParent.appendChild(emailErr);
emailErr.classList.add('text-danger');

var selectErr = document.createElement("small");
selectParent.appendChild(selectErr);
selectErr.classList.add('text-danger');

var radioErr = document.createElement("small");
radioParent.appendChild(radioErr);
radioErr.classList.add('text-danger');

var messErr = document.createElement("small");
messParent.appendChild(messErr);
messErr.classList.add('text-danger');

var subscribeErr = document.createElement("small");
subscribeParent.appendChild(subscribeErr);
subscribeErr.classList.add('text-danger');

var footerErr = document.createElement("small");
footerParent.appendChild(footerErr);
footerErr.classList.add('text-danger', 'w-100');

var overallErrors = 0;

function check(event) {
    event.preventDefault();
    overallErrors = 0;
    var radioErrors = 0;

    var fullNameVal = fullName.value;
    var phoneVal = phone.value;
    var emailVal = email.value;
    var selectVal = select.value;
    var messVal = mess.value;
    var subscribeVal = subscribe.value;
    var footerVal = footer.value;

    if (fullNameRegEx.test(fullNameVal)) {
        fullName.style.border = "2px solid green";
        fullNameErr.innerHTML = "";
    } else {
        fullName.style.border = "2px solid red";
        fullNameErr.innerHTML = "Invalid full name";
        overallErrors++;
    }
    if (phoneRegEx.test(phoneVal)) {
        phone.style.border = "2px solid green";
        phoneErr.innerHTML = "";
    } else {
        phone.style.border = "2px solid red";
        phoneErr.innerHTML = "Invalid phone number";
        overallErrors++;
    }
    if (emailRegEx.test(emailVal)) {
        email.style.border = "2px solid green";
        emailErr.innerHTML = "";
    } else {
        email.style.border = "2px solid red";
        emailErr.innerHTML = "Invalid email";
        overallErrors++;
    }
    if (messVal) {
        mess.style.border = "2px solid green";
        messErr.innerHTML = "";
    } else {
        mess.style.border = "2px solid red";
        messErr.innerHTML = "You must write a message";
        overallErrors++;
    }
    if (selectVal == 0) {
        select.style.border = "2px solid red";
        selectErr.innerHTML = "You must select service";
        overallErrors++;
    } else {
        select.style.border = "2px solid green";
        selectErr.innerHTML = "";
    }
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked == false) {
            radioErrors++;
        }
    }
    if (radioErrors == radio.length) {
        radioErr.innerHTML = "You must select gender";
        overallErrors++;
    } else {
        radioErr.innerHTML = "";
    }
    if (overallErrors == 0) {
        document.querySelector('.uspeh').innerHTML = "Form successfully submitted";
    } else {
        document.querySelector('.uspeh').innerHTML = "";
    }
    var formId = event.target.id;
    if(formId == "subscribe-parent"){
        if(emailRegEx.test(subscribe.value)){
            document.getElementById('modal1').style.display = "none";
        }
        else{
            subscribe.style.border = "2px solid red";
            subscribeErr.innerHTML = "Invalid email";
        }
    }
    if(formId == "footer-parent"){
        if(emailRegEx.test(footer.value)){
            footerErr.classList.remove('text-danger');
            footerErr.classList.add('text-success');
            footer.style.border = "2px solid green";
            footerErr.innerHTML = "Successfully subscribed";
        }
        else{
            footerErr.classList.remove('text-success');
            footerErr.classList.add('text-danger');
            footer.style.border = "2px solid red";
            footerErr.innerHTML = "Invalid email";
        }
    }
}