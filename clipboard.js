/**
 * Google Chrome Extension: clipboard copy helper
 * Coded using Rapid PHP 2011 11.22
 * (c) 2011-2012 Filip Oščádal <filip@mxd.cz>
 * Published under GNU GPL v3+ license
 */


Clipboard = {};
Clipboard.text = '';
Clipboard.size = 0;


// creates an invisible textarea containing text value
Clipboard.createTextArea = function(value)
{
	var txt = document.createElement('textarea');
	txt.style.position = "absolute";
	txt.style.left = "-100%";

	if (value !== null)  txt.value = value;

	this.text = txt.value;
	this.size = txt.value.length;
	document.body.appendChild(txt);

	return txt;
}

// copy data
Clipboard.copy = function(data)
{
	if (data === null) return false;

	var txt = this.createTextArea(data);
	txt.select();

	document.execCommand('Copy');
	document.body.removeChild(txt);

	return true;
}
