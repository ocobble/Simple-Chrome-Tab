


chrome.tabs.onCreated.addListener(function callback(tab) { 
    // Need to wait for page to load???

    // Check if Youtube?

    // Change the name of the page
    chrome.tabs.update(tab.id, {'title': "Music!"});

});
