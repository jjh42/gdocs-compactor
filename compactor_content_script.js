
function findCompactMenuEntry() {
    //document.getElementById(':65');
    var tags = document.getElementsByClassName('goog-menuitem-content');
    for(var i = 0; i < tags.length; i++) {
	if(tags[i].innerText.match("Compact controls") != null) {
	    console.log('Found menu entry');
	    return tags[i]
	}
    }
    console.log('Unable to locate menu entry.');
    return null;
}

// Make Google Docs default to compact view.
function toggleCompactView() {
    var menuEntry = findCompactMenuEntry();
    if (menuEntry) {
	var mouseDownEvt = document.createEvent('MouseEvent');
	var mouseUpEvt  = document.createEvent('MouseEvent');
	mouseDownEvt.initMouseEvent('mousedown', true, true, window, 1,0,0,0,0);
	mouseUpEvt.initMouseEvent('mouseup', true, true, window, 1,0,0,0,0);
	// Send the events
	menuEntry.dispatchEvent(mouseDownEvt);
	menuEntry.dispatchEvent(mouseUpEvt);
    }
}

console.log('Compactor script running');
toggleCompactView();