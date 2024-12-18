




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
        let cards=document.getElementsByClassName("project-card");
        cards[0].href='./#projects';
        cards[1].href='./#projects';
        cards[2].href='./#projects';
        cards[3].href='./#projects';

    }
    else if (mediaQueryMin.matches) {
        
        // titleContainer.style.display= "block";
        headerNav.style.display = "block";
        smallScreenNav.style.display = "none";
        smallScreenMenu.style.display = "none";
        toggleNav.checked=false;
        let cards=document.getElementsByClassName("project-card");
        cards[0].href='./#projects';
        cards[1].href='./#projects';
        cards[2].href='./#projects';
        cards[3].href='./#projects';
        

    }
    else {
        headerNav.style.display = "none";
        smallScreenNav.style.display = "block";
        let cards=document.getElementsByClassName("project-card");
        cards[0].href='./#video-anchor';
        cards[1].href='./#video-anchor';
        cards[2].href='./#video-anchor';
        cards[3].href='./#video-anchor';

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
  
  }

  detectBrowser();


  // ------- display project on click --------

  const videoURLsObj = {
    "project-card project1": "video/Feedback App Demo.mov",
    "project-title project1": "video/Feedback App Demo.mov",
    "project-summary project1": "video/Feedback App Demo.mov",

    "project-card project2": "video/Sign Up Form App Video Demo.mov",
    "project-title project2": "video/Sign Up Form App Video Demo.mov",
    "project-summary project2": "video/Sign Up Form App Video Demo.mov",

    "project-card project3": "video/React Interval Timer.mp4", 
    "project-title project3": "video/React Interval Timer.mp4",
    "project-summary project3": "video/React Interval Timer.mp4",

    "project-card project4": "video/Town Board Walk Through.mov", 
    "project-title project4": "video/Town Board Walk Through.mov",
    "project-summary project4": "video/Town Board Walk Through.mov"
  }

  let projectCard = document.getElementsByClassName("project-card");
  projectElementsArr=Array.from(projectCard);
  projectElementsArr.map(index=>index.addEventListener('click', listen));


  const loader=document.getElementById("video-loading");
  

  function listen(e){
    loader.style.display="block";
    projectElementsArr.map(index=>index.classList.remove('active'));
    let dyn=document.getElementById("dynamic-video");
      if (dyn.hasChildNodes()===true){
        clear();
        };
      displayProject(e.target.className);
      let index=e.target.className[e.target.className.length-1];
      let card=document.getElementsByClassName(`project${index}`);
      card[0].classList.toggle("active");
  }


  function clear (){
    let dyn=document.getElementById('dynamic-video');
    
    dyn.removeChild(dyn.childNodes[dyn.childNodes.length-1]);
  }

  
  function displayProject(key){
   
    let container = document.getElementById('project-video-container')
    container.style.display = 'block';
    let dyn=document.getElementById('dynamic-video');
    let video=document.createElement('video');
    video.id="video"
    video.controls=true;
    video.addEventListener("loadeddata", onVideoLoad(video, loader))
    let source=document.createElement('source');
    source.id="source"
    dyn.appendChild(video)
    video.appendChild(source)
    source.src=videoURLsObj[key];
  };

  function onVideoLoad(video, loader){
    loader.style.display='none';
    video.poster='./images/hummingbird grey fill.png'
  }


    

    