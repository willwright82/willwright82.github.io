---
layout: post
title: Django maths using widthratio
Category: Code
---

Intro about Django template maths being one of my pet peeves

### Code
{% highlight python %}
to compute A*B: {% widthratio A 1 B %}
to compute A/B: {% widthratio A B 1 %}
to compute A^2: {% widthratio A 1 A %}
to compute (A+B)^2: {% widthratio A|add:B 1 A|add:B %}
to compute (A+B) * (C+D): {% widthratio A|add:B 1 C|add:D %}
{% endhighlight %}

### Caveats
- Remember `widthratio`