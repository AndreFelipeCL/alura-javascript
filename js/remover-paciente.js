var table = document.querySelectorAll("table");

table.forEach(function (table) {
    table.addEventListener("dblclick", function (event) {
        event.target.parentNode.remove();
    });
});
