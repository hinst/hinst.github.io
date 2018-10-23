# Бложик
бложик
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | prepend: site.baseurl }}"><b>{{ post.date }}</b> {{ post.title }}</a>
    </li>
  {% endfor %}
</ul>