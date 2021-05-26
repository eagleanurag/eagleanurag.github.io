

window.onload = function () {
  const favicon = document.getElementById("favicon");
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
      function myFunction() { 
		if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
		favicon.setAttribute("href", "images/loopfavicon.gif");
	}
	else 
    {
		favicon.setAttribute("href", "images/eagle.ico");
    }
    }
  });

  function blink() {
    blinkEvent = setInterval(() => {
      if (document.title === attentionMessage) {
        function myFunction() { 
		if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
		favicon.setAttribute("href", "images/loopfavicon.gif");
	}
	else 
    {
		favicon.setAttribute("href", "images/eagle.ico");
    }
      } else {
        document.title = attentionMessage;
        favicon.href = "/images/folded.png";
      }
    }, 1000);
  }
};