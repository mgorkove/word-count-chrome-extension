// gets word count and approx reading time from content script (get_text.js)
// chrome.tabs.sendMessage format from chrome documentation 
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "GetTime"}, function(response) {
            document.getElementById("num").innerHTML = response.wordCount;
            document.getElementById("time").innerHTML  = response.readingTime + " minutes.";
        });
    });

