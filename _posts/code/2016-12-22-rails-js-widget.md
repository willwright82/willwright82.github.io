---
layout: post
title: Creating an embeddable widget in Rails 4
categories:
- old
---


If you wish to allow some of your content to be embedded into other websites, you can create a JS script that will enable that quite easily using Rails. Sounds good? Let's go!

First, let's start by adding an endpoint in our `routes` file:

{% highlight ruby %}
#config/routes.rb
resources :embeds, only: :show, path: 'embed' # -> domain.com/embed/:id
{% endhighlight %}

This will allow the client website to use our JS embed code to connect
to our app via `domain.com/embed/:id`

In order for this to happen smoothly, we will need to allow connections from remote sites by managing our [CORS (Cross Origin Resource Sharing)](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) policy, which would block any XHR requests from non-origin domains by default, preventing attacks to our server by anonymous requests.

We will do so by creating a private `allow_iframe` method in our `ApplicationController` which we can reuse if needed:

{% highlight ruby %}
#app/controllers/application_controller.rb
private

def allow_iframe
  response.headers.delete 'X-Frame-Options'
end
{% endhighlight %}

This will delete the `X-Frame-Options` to which Rails 4 adds a default value of `SAMEORIGIN`, as the absence of this header will make the browser "allow all" origins (only where the method is called, of course) and is more consistent to different browsers and caching issues than simply replacing its value.

Then, we will call it in the corresponding controller:

{% highlight ruby %}
#app/controllers/embeds_controller.rb
class EmbedsController < ApplicationController
  after_filter :allow_iframe, only: [:show]
  protect_from_forgery except: [:show]

  layout false

  def show
    @content = Event.find(params[:id])
  end
end
{% endhighlight %}

And in the `show` view:

{% highlight eruby %}
<!-- app/views/embeds/show.html.erb -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">

    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
    <%= yield :stylesheets %>
  </head>

  <body>
  <!-- THE CONTENT CAN BE IN A PARTIAL: -->
    <%= render partial: 'shared/embed', locals: { content: @content } %>
  <!-- OR JUST BY ITSELF: -->
    <%= @content.title %>
    <%= @content.description %>
    […]
  </body>

</html>
{% endhighlight %}

Now, lets create a simple `embed.js` script in our `public` folder which will be
accesed by the client website to load our embedded content:

{% highlight javascript %}
// public/embed.js
window.onload = function() {
  var scriptParam = document.getElementById('load_widget');
  var id = scriptParam.getAttribute('data-content');

  var iframe = document.createElement('iframe');

  // Set width and height as required
  iframe.setAttribute('width', '390');
  iframe.setAttribute('height', '340');

  // Remove those horrible borders...
  iframe.setAttribute('frameborder', '0');
  iframe.style.border = '0';

  // Replace the iframe's src url to contain our request content
  iframe.src = scriptParam.getAttribute('src').replace(/\.js/g, '/') + id;

  document.body.appendChild(iframe);

};
{% endhighlight %}

Now all we have to do is instruct the client website to insert this simple script, where the `data-content` attribute is the `:id` of the desired content:

{% highlight html %}
<script id="load_widget" src="https://domain.com/embed.js" data-content="1"></script>
{% endhighlight %}

Enjoy!

---

### _Optional AJAX implementation_

In case you'd like to allow AJAX functionality to this widget, great gem for managing this in Rails is the [RACK-CORS gem](http://github.com/cyu/rack-cors) which we can add to our `Gemfile`:

{% highlight ruby %}
#Gemfile
gem 'rack-cors', require: 'rack/cors'
{% endhighlight %}

And configure:

{% highlight ruby %}
#config/application.rb
config.middleware.use Rack::Cors do
  allow do
    origins '*'
    resource '/embed.js', headers: :any, methods: [:get, :post, :options]
  end
end
{% endhighlight %}
