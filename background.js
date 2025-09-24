chrome.commands.onCommand.addListener(async (command) => {
  // Get the mapping and target tab from storage
  const result = await chrome.storage.sync.get([command, 'targetTabId']);
  const number = result[command];
  const tabId = result['targetTabId'] ? parseInt(result['targetTabId']) : null;
  if (!number || !tabId) return;

  // Click the button
  await chrome.scripting.executeScript({
    target: {tabId: tabId},
    func: (num) => {
      const selector = `div[data-tg-id='${num}'] button.ptt-button`;
      const el = document.querySelector(selector);
      if (el) el.click();
    },
    args: [number]
  });

  // Check for transmission indicator and update tab title
  await chrome.scripting.executeScript({
    target: {tabId: tabId},
    func: (num) => {
      const txSelector = `div[data-tg-id='${num}'] img[src='img/rssi-tx.png']`;
      const txEl = document.querySelector(txSelector);
      if (txEl) {
        if (!document.title.startsWith('[XMIT]')) {
          document.title = '[XMIT] ' + document.title;
        }
      } else {
        if (document.title.startsWith('[XMIT]')) {
          document.title = document.title.replace(/^\[XMIT\] /, '');
        }
      }
    },
    args: [number]
  });
});
