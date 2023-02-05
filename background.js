function handleCreated(downloadItem) {
  chrome.downloads.cancel(downloadItem.id);
  console.log("Download Cancle ID: " + downloadItem.id);
}
chrome.downloads.onCreated.addListener(handleCreated);