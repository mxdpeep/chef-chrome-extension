/**
 * Google Chrome Extension: Chef
 * Coded using Rapid PHP 2011 11.22
 * (c) 2011-2012 Filip Oščádal <filip@mxd.cz>
 * Published under GNU GPL v3+ license
 */


// get current domain...
var d = location.href.split(/https{0,1}:\/\/([^\/]*)\/*.*/);

// ...and post message to the main script
chrome.extension.connect().postMessage(
{
	address: d[1]
});
