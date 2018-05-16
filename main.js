function initialize(){
    var container = document.querySelector('.social-btns');
        container.addEventListener('click', handleClicks, false);
}

function clickHandler(e){
    var button = e.target;
    //var openBlank = button.setAttribute('target', '_blank');    
    if (button){
        if(button.className === 'btn facebook'){
            location.replace("https://www.facebook.com");
        }else if(button.className === 'btn twitter'){
            location.replace("https://www.twitter.com");
        }else if(button.className === 'btn google'){
            location.replace("https://plus.google.com");
        }else if(button.className === 'btn dribbble'){
            location.replace("https://www.dribbble.com");
        }else{
            button.href = "https://www.skype.com/en";
        }
    } 
}

function handleClicks(){
    var links = document.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++){
        links[0].href = "http://www.facebook.com";
        links[1].href = "http://www.twitter.com";
        links[2].href = "http://www.plus.google.com";
        links[3].href = "http://www.dribbble.com";
        links[4].href = "http://www.skype.com/en.com";
    }
}