Несколько недель писал свою тексто-игру на TypeScript, но позже подзабросил. Проект был отчатсти успешный: я лучше узнал TypeScript. На этом плюсы от проекта заканчиваются.

Кроме того, недавно опробовал TypeScript на node.js. То есть, я уже успел попробовать TypeScript и в браузере, и в ноде.

Ну так вот, что хочу сказать... У TypeScript есть разные режимы компиляции... Один из режимов - всё совать в один большой файл. Так вот, режим этот не самый лучший. Почему? Потому что есть такая страшная вещь как тэг reference...

Допустим, проект на TypeScript состоит из нескольких файлов. При этом некоторые файлы должны идти раньше, чем другие. Например, есть класс App. Логично что он должен быть объявлен раньше, чем у меня вызывается new App(). Но в TypeScript почему-то такого не сделали, а сделали так что файлы компилируются в случайном порядке, и может легко получиться так, что 

<div id="disqus_thread"></div>
<script type="text/javascript">
    var disqus_config = function () {
        this.page.url = "[{{ site.baseurl }}]{{ page.url }}";
        this.page.identifier = "{{ page.url }}";
    };

    // You should be able to get the following lines of code from your Disqus admin.
    // https://disqus.com/admin/universalcode
    (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://blog-mvilg9pc5n.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>