
// Poll for transmission indicator and update tab title

let mappedNumbers = [];
let lastXmit = false;

function pollXmit() {
	let found = false;
	mappedNumbers.forEach(num => {
		if (!num) return;
		const txSelector = `div[data-tg-id='${num}'] img[src='img/rssi-tx.png']`;
		const txEl = document.querySelector(txSelector);
		if (txEl) found = true;
	});
	if (found) {
		if (!document.title.startsWith('[XMIT]')) {
			document.title = '[XMIT] ' + document.title;
		}
		lastXmit = true;
	} else {
		if (lastXmit && document.title.startsWith('[XMIT]')) {
			document.title = document.title.replace(/^\[XMIT\] /, '');
		}
		lastXmit = false;
	}
}

function updateMappedNumbers() {
	chrome.storage.sync.get(null, (result) => {
		mappedNumbers = [];
		for (let i = 1; i <= 10; i++) {
			const key = `bind_${i}`;
			if (result[key]) mappedNumbers.push(result[key]);
		}
	});
}

updateMappedNumbers();
setInterval(updateMappedNumbers, 1000); // Refresh mapping every second
setInterval(pollXmit, 250);
