chrome.action.onClicked.addListener((tab) => {
	console.log("Hello from extension!");

	// CSS injection
	// chrome.scripting.insertCSS({
	// 	target: { tabId: tab.id },
	// 	css: "html { display: none !important;}",
	// });

	// navigation
	chrome.tabs.update(tab.id, { url: "https://google.com" });
});

// MANIFEST - this doesnt work

// "content_scripts": [
//     {
//         "matches": ["https://google.com/*"],
//         "css": ["main.css"]
//     }
// ],

// "web_accessible_resources": [
//     {
//         "resources": ["main.css", "Jakub.png"],
//         "matches": ["https://google.com/*"]
//     }
// ],
