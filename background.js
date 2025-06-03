chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["geniniApiKey"], (result) => {
    if (!result.geminiApiKey) {
      chrome.tabs.create({ url: "options.html" });
    }
  });
});
