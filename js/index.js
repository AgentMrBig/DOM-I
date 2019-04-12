const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let roundImg = document.getElementById("cta-img");
roundImg.setAttribute('src', siteContent["cta"]["img-src"])

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// getting and setting the button
let btns = document.getElementsByTagName("BUTTON")[0];
//btns.setAttribute('innerHTML', siteContent["cta"]["button"]);
btns.innerHTML = siteContent["cta"]["button"];

//adding navigation
//Getting all the a elements, which happen to be only in the navs
var as = document.getElementsByTagName("a");
var navPrefix = "nav-item-";
//loop through nav links assigning the correct json data to each link
for(let i = 1; i < as.length; i++){
  as[i].innerHTML = siteContent["nav"][`${navPrefix + i}`];
}

//adding cta-text
var ctaText = document.getElementsByClassName("cta-text");

ctaText = ctaText[0].getElementsByTagName("H1");
ctaText[0].innerHTML = siteContent["cta"]["h1"];


//adding main-content section
var topContent = document.getElementsByClassName("top-content");

var txtContentH4 = document.getElementsByClassName("text-content");
var txtContentp = document.getElementsByClassName("text-content");

// adding features content
txtContentH4 = txtContentH4[0].getElementsByTagName("H4");
txtContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
txtContentp = txtContentp[0].getElementsByTagName("p");
txtContentp[0].innerHTML = siteContent["main-content"]["features-content"];

// adding about content
var topContentH4 = topContent[0].getElementsByTagName("h4");
topContentH4[1].innerHTML = siteContent["main-content"]["about-h4"];
var topContentp = topContent[0].getElementsByTagName("p");
topContentp[1].innerHTML = siteContent["main-content"]["about-content"];

var bottomContent = document.getElementsByClassName("bottom-content");
// Setting services content
var bottomServicesH4 = bottomContent[0].getElementsByTagName("h4");
bottomServicesH4[0].innerHTML = siteContent["main-content"]["services-h4"];
var bottomServicesp = bottomContent[0].getElementsByTagName("p");
bottomServicesp[0].innerHTML = siteContent["main-content"]["services-content"];

// Setting products content
var bottomProductH4 = bottomContent[0].getElementsByTagName("h4");
bottomProductH4[1].innerHTML = siteContent["main-content"]["product-h4"];
var bottomProductp = bottomContent[0].getElementsByTagName("p");
bottomProductp[1].innerHTML = siteContent["main-content"]["product-content"];

// Setting vision content
var bottomVisionH4 = bottomContent[0].getElementsByTagName("h4");
bottomVisionH4[2].innerHTML = siteContent["main-content"]["vision-h4"];
var bottomVisionp = bottomContent[0].getElementsByTagName("p");
bottomVisionp[2].innerHTML = siteContent["main-content"]["vision-content"];

// Setting contact content
var contact = document.getElementsByClassName("contact");
var bottomContactH4 = contact[0].getElementsByTagName("h4");
bottomContactH4[0].innerHTML = siteContent["contact"]["contact-h4"];
var bottomContactp = contact[0].getElementsByTagName("p");
bottomContactp[0].innerHTML = siteContent["contact"]["address"];
bottomContactp[1].innerHTML = siteContent["contact"]["phone"];
bottomContactp[2].innerHTML = siteContent["contact"]["email"];

// Setting Footer content
var footer = document.getElementsByTagName("FOOTER");
console.log(footer[0]);
var footerp = footer[0].getElementsByTagName("p");
console.log(footerp[0]);
footerp[0].innerHTML = siteContent["footer"]["copyright"];




