<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.date | date_to_string }} • {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>