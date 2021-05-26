

window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Come back";
  let blinkEvent = null;

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      blink();
    } else {
      document.title = pageTitle;
      clearInterval(blinkEvent);
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      myFunction();
    }
  });

  function blink() {
    blinkEvent = setInterval(() => {
      if (document.title === attentionMessage) {
        document.title = pageTitle;
        myFunction();
      } else {
        document.title = attentionMessage;
        favicon.href = "./images/folded.png";
      }
    }, 1000);
  }
  function myFunction() { 
		if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
		favicon.setAttribute("href", "./images/loopfavicon.gif");
	}
	else 
    {
		favicon.setAttribute("href", "./images/eagle.ico");
    }
  }
};