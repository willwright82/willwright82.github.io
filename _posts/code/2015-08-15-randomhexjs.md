---
layout: post
title: Random Hex colours using Javascript
categories:
- old
- code
---

Here is a quick and short way to generate random #Hex colours using Javascript:

### Code
{% comment %}
{% gist willwright82/93b0bdd4f8d6cb574577 %}
{% endcomment %}
{% highlight javascript %}
'#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);

// To use a string (such as user_id) for a unique colour:

function stringToColorCode(str) {
    return (str in color_codes) ? color_codes[str] : (color_codes[str] = '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6));
}
{% endhighlight %}
