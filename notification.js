/**
 * Google Chrome Extension: notification helper
 * Coded using Rapid PHP 2011 11.22
 * (c) 2011-2012 Filip Oščádal <filip@mxd.cz>
 * Published under GNU GPL v3+ license
 */


Notification = {};
Notification.prefs = {};
Notification.prefs.message = 'message not set';
Notification.prefs.icon = 'notification.png';
Notification.prefs.title = 'title not set';
Notification.prefs.timeout = 1000;


// display the notification
Notification.show = function(message, icon, title, timeout)
{
	message = message || this.prefs.message;
	icon = icon || this.prefs.icon;
 	title = title || this.prefs.title;
 	timeout = timeout || this.prefs.timeout;

	// set notification properties
	var notification = webkitNotifications.createNotification(
		icon,
		title,
		message
	);

	// show notification
	notification.show();

	setTimeout(function()
	{
		notification.cancel();
	},
		timeout
	);

	// remove all notifications on window.close() using closures
	var _onunload = window.onunload;
	window.onunload = function()
	{
		notification.cancel();
		_onunload();
	}
}
