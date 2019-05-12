// var obj = document.getElementsByClassName('button')[0]; //timer on button Clear X
// var time = 5;
// var timer = setInterval("Start()", 1000);
// function Start() {
//     if(time !== 1){
//         time--;
//     }
//     else{
//         clearInterval(timer);
//         obj.innerHTML = '<div class="del_li" onclick="del_li()"> <span >&#10006;</span> <span class="clr">Clear all</span> </div>'
//     }
// }

function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function bounce(timeFraction) {
    for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}

    var height = button.clientHeight - del_li.clientHeight;
    var width = 100;
    var left = 41;
    var tp = 27 ;

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw: function(progress) {
            del_li.style.top = height * progress - tp + 'px'
        }
    });

    animate({
        duration: 2000,
        timing: makeEaseOut(quad),
        draw: function(progress) {
            del_li.style.left = width * progress - left + "px"
        }
    });

function del_lii() {                                    // Delete all list
    var element = document.getElementById("myUL");
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}
function checkedAll() {
    var ch = document.getElementById('check');
    {
        if (ch.checked)
        {
            var i = 0;
            var select = document.getElementsByTagName("li");
            while (select[i])
            {
                select[i].classList.add('checked');
                i++;
            }
        }
        else
        {
            var i = 0;
            var select = document.getElementsByTagName("li");
            while (select[i])
            {
                select[i].classList.remove("checked");
                i++;
            }
        }
    }
}
