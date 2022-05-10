console.log("this is from background");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("recived message");
    console.log(message);
   
        fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${message.name}?key=PUT YOUR API KEY HEAR`) //PUT YOUR API KEY HEAR
        .then(response => response.json())
        .then(data => {
            console.log("----------------------------");
            console.log(data)
            sendResponse(data)
            console.log("----------------------------");
        
        })
        .catch(err => console.error(err));
    


    // sendResponse("message")
    return true;

})
