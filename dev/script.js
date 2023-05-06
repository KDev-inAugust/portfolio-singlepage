




//------set up mobile nav----------
    let toggleNav=document.getElementById("togglenav")
    let smallScreenNav=document.getElementById("smallScreenNav")
    let hamburger=document.getElementById("hamburger")
    let mobileNav2=document.getElementById("mobile-nav")
    let smallScreenMenu = document.getElementById("small-screen-menu");
    let titleContainer = document.getElementById("titleContainer");
    let headerNav = document.getElementById("headerNav");
    let links=document.querySelectorAll('.smallMenuLink');

    hamburger.addEventListener("click", handleMobileNavClick)
    smallScreenNav.addEventListener("click", handleMobileNavClick)

function handleMobileNavClick(){
    console.log("mobile nav clicked");
    if (smallScreenMenu.style.display==="none")
    {toggleNav.checked=true;
        smallScreenMenu.style.display = "block" }
    else
    {smallScreenMenu.style.display = "none";
    toggleNav.checked=false}
}


//----------remove menu overlay on click---------


links.forEach((index)=>{index.addEventListener('click', handleLinkClick)})
function handleLinkClick() {
  console.log(" a link clicked ");
  smallScreenMenu.style.display = "none";
  toggleNav.checked=false;
  
}

mediaInq()
window.addEventListener('resize', (e) => {
    mediaInq();
})


function mediaInq(){
    const mediaQueryMin = window.matchMedia('only screen and (min-width: 646px)')
    if (!!window.navigator.userAgent.match(/iPhone/i)){
        // titleContainer.style.display= "none";
        headerNav.style.display = "none";
        smallScreenNav.style.display = "block";

    }
    else if (mediaQueryMin.matches) {
        console.log('larger screen detected');
        // titleContainer.style.display= "block";
        headerNav.style.display = "block";
        smallScreenNav.style.display = "none";
        smallScreenMenu.style.display = "none";
        toggleNav.checked=false

    }
    else { console.log('small screen detected') 
    // titleContainer.style.display= "none";
        headerNav.style.display = "none";
        smallScreenNav.style.display = "block";
    }
}

function detectBrowser() {

    let userAgent = navigator.userAgent;
    let browserName;
  
    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "Edge";
    } else if (userAgent.match(/android/i)) {
      browserName = "Android";
    } else if (userAgent.match(/iphone/i)) {
      browserName = "iPhone";
    } else {
      browserName = "Unknown";
    }
  
    console.log("You are browsing with: " + browserName + "");
  }

  detectBrowser();


  // ------- display project on click --------

  const videoURLsObj = {
    project1: "video/Feedback App Demo.mov",
    project2: "video/React Interval Timer.mp4", 
    project3: "video/Town Board Walk Through.mov"
  }

  let projectTitle = document.getElementsByClassName("project-title");
  projectElementsArr=Array.from(projectTitle);
  projectElementsArr.map(index=>index.addEventListener('click', listen));

  function listen(e){
    console.log(e.target.class)

    let dyn=document.getElementById("dynamic-video");
      if (dyn.hasChildNodes()===true){
        clear();
        };
      displayProject(e.target.id)
  }

  function clear (){
    let dyn=document.getElementById('dynamic-video');
    dyn.removeChild(dyn.childNodes[dyn.childNodes.length-1])
  }

  function displayProject(key){
    let container = document.getElementById('project-video-container')
    container.style.display = 'block';
    let dyn=document.getElementById('dynamic-video');
    let video=document.createElement('video');
    video.id="video"
    video.controls=true;
    let source=document.createElement('source');
    source.id="source"
    dyn.appendChild(video)
    video.appendChild(source)
    source.src=videoURLsObj[key];
  };

  // contact form submission
  let contactForm=document.getElementById('contact-form')
  contactForm.addEventListener("submit", handleSubmit)
  function handleSubmit(e){
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let message=document.getElementById('message');
    e.preventDefault();
    sendEmail(name.value, email.value, message.value);
    console.log(name.value, email.value, message.value)
    name.value='';
    email.value='';
    message.value='';

  }

  function sendEmail(name, email, message){
    Email.send({
    SecureToken : "dadc541e-6f14-4230-94fd-80d73e811ad3",
    To : 'buy1@kanemathis.com',
    From : "kanesolar@gmail.com",
    Subject : "Webform Submission!!",
    Body : `FROM: ${name} 
    MESSAGE: "${message}"
    E-MAIL: ${email}`
    }).then(
      message => alert(message)
    );
  }

    

    