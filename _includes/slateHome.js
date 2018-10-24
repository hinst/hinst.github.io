console.log("Executing slateHome");
(function() {
    function wrap(el, wrapper) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }
    var link = document.createElement("a");
    link.setAttribute("href", "{{ site.url }}{{ site.baseurl }}");
    wrap(document.getElementById("project_title"), link);
})();
