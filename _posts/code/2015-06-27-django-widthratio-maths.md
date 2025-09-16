---
layout: post
title: Django maths using widthratio
categories:
- old
- code
---

I use a lot of Django templating and one of my pet peeves is it's inability to handle simple maths. Seriously, why?

Sure, you can build your own functions for this, but in my opinion, maths is something that should be built-in. Yeah, you can `add`, but that's about it.

Now, if you're only using integers, you can be quite creative with `widthratio` to solve many math expressions:

### Code
{% highlight python %}
to compute A*B: { % widthratio A 1 B % }
to compute A/B: { % widthratio A B 1 % }
to compute A^2: { % widthratio A 1 A % }
to compute (A+B)^2: { % widthratio A|add:B 1 A|add:B % }
to compute (A+B) * (C+D): { % widthratio A|add:B 1 C|add:D % }
{% endhighlight %}

### Caveats
- The code above has an extra space between `{` and `%` and `}` to avoid my Jekyll trying to parse it&hellip;
- Remember `widthratio` rounds everything to integers. So, if you need precise results you should really look elsewhere.