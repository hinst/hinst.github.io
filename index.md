<p>
    {% for post in site.posts %}
        {{ post.date | date_to_string }} • <a href="{{ post.url | prepend: site.baseurl }}"> {{ post.title }}</a> </br>
    {% endfor %}
</p>