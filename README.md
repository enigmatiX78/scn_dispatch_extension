# SCN Radio Dispatch Chrome Extension

A Chrome extension which allows users of [SCN Radio](https://www.scncomms.app/) to map global keybinds to specific talkgroups (channels) in their Dispatch panel to enable use of things like foot pedals, Stream Decks, etc. to simplify dispatch operations. Once properly installed, you can run Chrome in the background with the Dispatch panel open in a tab and the extension configured, and it will still respond to your keybinds.

***No support is provided for the extension.*** You are welcome to download it and use it if it works for you, and make any modifications you like, but please don't reach out for assistance. The extent of the assistance I am able to offer is provided in the FAQ below. Thank you for your understanding and I hope you find this extension useful.
## Authors

- [@enigmatiX78](https://www.github.com/enigmatiX78)


## FAQ

#### How do I install the extension?

* Open up the [Extensions Manager](chrome://extensions/).
* Ensure "Developer mode" is enabled at the top right corner.
* Click the "Load unpacked" button.
* Locate the .ZIP file on your hard drive and select it.

#### How do I configure the extension?

* Go to the [Extensions Shortcut Manager](chrome://extensions/shortcuts).
* Map each of the numbered keybinds (Trigger bind 1 through Trigger bind 10) to Ctrl+Shift+1 through Ctrl+Shift+0, respectively. (Note: If you don't plan to use all 10 keybinds, you can choose to just map the ones you plan to use.)
* Ensure all of the keybinds are set as "Global" and not "Chrome" in the dropdown next to them.
* Open your Dispatch panel at the URL provided by SCN.
* Find the extension in your list of installed extensions by clicking the button next to Chrome's address bar, and then click on the extension name (SCN Dispatch Binds).
* For each of the corresponding keybinds shown, type in the talkgroup ID you want to bind that shortcut to. I recommend using Ctrl+Shift+1 for your primary channel that you talk on the most.
* Select the tab containing your Dispatch panel using the dropdown provided.
* Click Save.

#### How do I use the extension?

You should now simply be able to use your keybinds with the Dispatch panel. You can map Ctrl+Shift+1 and your other keybinds to a foot pedal, Stream Deck, or any other device to make it easier for you to dispatch. At this point after following the above instructions everything should be working.

#### The extension was working at one point but it's not now; how do I fix it?

Double-check a couple of things that Chrome can sometimes reset on its own:
* Make sure in the [Extensions Shortcut Manager](chrome://extensions/shortcuts) that all of your keybinds are still set to "Global".
* Make sure that the target tab is still correctly selected in your extension configuration. (If you've closed your browser window and come back, you'll need to redo this as it will clear the list of open tabs at that time.)
## License

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
