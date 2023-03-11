chrome.
action.
onClicked.
addListener(async (tab) => {
    try {
        await chrome.scripting.executeScript({
            target: {
                tabId: tab.id,
                allFrames: true,
            },
            files: ["content-script.js"],
        });
    } catch (err) {
        console.error(`failed to execute script: ${err}`);
    }
});