# jquery-ui-url-tabs

If you have jQuery UI tabs enabled in your site, and you want to be able to share a link with a tab activaded by default this small jQuery plugin helps you to achieve that.

This module requires [jQuery UI](https://jqueryui.com/tabs/)

for example you want to share your link `example.com/my-tabbed-page` with the second tab enabled, you'll do the following:

`example.com/my-tabbed-page#tab-1` where the hash on the URL `#tab-1` enables the tab.

this small plugin adds the hash of your tabs automatically to the URL, therefore you can share your urls with a tab enabled by default.

Use:

```
$('.my-tab-container').tabs().urlTabs();
```

the other functionality this plugin offers is to activate the tab when the user uses the back and forward button of the browser.
