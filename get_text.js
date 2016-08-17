
// counts every word in each paragraph tag of the webpage, then divides it by 180 words/min to 
// get average reading time for the page 
// chrome.runtime.onMessage.addListener format from chrome documentation 
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        		var paragraphs = document.getElementsByTagName("P"); 
                var wordCount = 0; 
				var readingTime = 0; 
				for (var j = 0; j<paragraphs.length; j++) {
					console.log(paragraphs[j].innerText); // for debugging 
					var words = paragraphs[j].innerText.split(" ");
					for (var i = 0; i<words.length; i++) {
						wordCount++; 
					}
				}
				var avgReadingSpeed = 180; // from wikipedia -- average words/min when reading from a monitor
				readingTime = Math.round(wordCount/avgReadingSpeed); 
				console.log(readingTime); // for debugging 
				var data = {wordCount, readingTime}; 
                sendResponse(data);
    }
);

