chrome.browserAction.onClicked.addListener(function (activeTab) {
  var newURL = "https://kuron3k0.github.io";
  chrome.tabs.create({ url: newURL });
});
