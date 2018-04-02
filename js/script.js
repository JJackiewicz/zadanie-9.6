var add = document.getElementById("addElem");
var list = document.getElementById("list");

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var itemCount = document.getElementsByTagName('li').length;

    element.innerHTML = 'item' + itemCount;
    list.appendChild(element);
});
