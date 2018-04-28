**For [tt-rss](http://tt-rss.org): Open 10 shown starred articles in background tabs and unstar them!**

It simplifies this workflow: On a mobile tt-rss reader, I star articles which I want to read on my desktop 
later (it's mainly about scientific papers). On the desktop, I need to click each one of them and un-star, which is annoying.

# Installation

```
cd .../tt-rss/plugins
git clone https://wolfgang@bitbucket.org/wolfgang/tt-rss-plugin-openten.git openten
```

Before using it, you must tell your browser to allow opening multiple popup windows for your tt-rss host. Either

* Simply star two articles and click `OpenTen`, the browser should offer to allow popups.
* Or, manually add an exception to your browser settings (Chrome: `chrome://settings/content/popups`)


# Update

```
cd .../tt-rss/plugins/openten
git pull origin master
```

