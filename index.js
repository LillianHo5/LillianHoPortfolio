const intro = document.getElementById('welcome')
function typing_effect(element, speed) { 
    let text = "Hello, I'm Lillian Ho! :-)";
    
    element.innerHTML = "";

    var i = 0;

    var timer = setInterval(function() { 
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else { 
            clearInterval(timer);
        }
    }, speed)
}

typing_effect(intro, 80);