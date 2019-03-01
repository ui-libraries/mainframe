var views = ['brinton/nowShowing.html', 'index.html']//links to rotate

function rotateView(){
  
  }


}//end rotate view

function idleTimer() {
    var t;
    window.ontouchstart = resetTimer;
    window.ontouchmove = resetTimer;
    window.onscroll = resetTimer;
    window.onload = resetTimer;
    window.onclick = function(){
        /*$('#touchPan').hide('slow');*/
        resetTimer();
    }; //checks for clicks anywhere but map tiles


    function changeView() {
        open = setInterval(function() {
          rotateView()
        }, 5000) //set this for length of video + amount of break time you want in between playing the video
        console.log('Inactivity Trigger')
    }

    function resetTimer() {
        clearInterval(open);
        clearTimeout(t);
        t = setTimeout(changeView, 5000);  // time is in milliseconds
        //console.log('Activity Detected')
    }
}

idleTimer();
