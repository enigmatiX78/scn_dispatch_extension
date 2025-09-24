const commands = [
  'bind_1','bind_2','bind_3','bind_4','bind_5','bind_6','bind_7','bind_8','bind_9','bind_10'
];
const keyNames = ['Ctrl+Shift+1','Ctrl+Shift+2','Ctrl+Shift+3','Ctrl+Shift+4','Ctrl+Shift+5','Ctrl+Shift+6','Ctrl+Shift+7','Ctrl+Shift+8','Ctrl+Shift+9','Ctrl+Shift+0'];


const bindsDiv = document.getElementById('binds');
commands.forEach((cmd, i) => {
  const row = document.createElement('div');
  row.className = 'row';
  row.innerHTML = `<label>${keyNames[i]} <input type='number' min='0' id='${cmd}'></label>`;
  bindsDiv.appendChild(row);
});

// Populate tab selector
const tabSelect = document.getElementById('tabSelect');
chrome.tabs.query({}, (tabs) => {
  tabs.forEach(tab => {
    const option = document.createElement('option');
    option.value = tab.id;
    option.text = tab.title ? tab.title.substring(0, 40) : tab.url;
    tabSelect.appendChild(option);
  });
  // Load saved tabId
  chrome.storage.sync.get(['targetTabId'], (result) => {
    if (result.targetTabId) tabSelect.value = result.targetTabId;
  });
});

// Load existing mappings
chrome.storage.sync.get(commands, (result) => {
  commands.forEach((cmd, i) => {
    document.getElementById(cmd).value = result[cmd] || '';
  });
});

// Save mappings and selected tab
const form = document.getElementById('bindForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {};
  commands.forEach(cmd => {
    const val = document.getElementById(cmd).value;
    if (val) data[cmd] = val;
    else data[cmd] = '';
  });
  data['targetTabId'] = tabSelect.value;
  chrome.storage.sync.set(data, () => {
    // Inject content.js into the selected tab
    chrome.scripting.executeScript({
      target: {tabId: parseInt(tabSelect.value)},
      files: ['content.js']
    }, () => {
      document.getElementById('status').textContent = 'Saved & Script Injected!';
      setTimeout(() => document.getElementById('status').textContent = '', 1200);
    });
  });
});
