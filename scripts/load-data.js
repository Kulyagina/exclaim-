var elements = document.querySelector('.elements');
fnDelay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
var isLoad = false;
document.addEventListener('scroll', function (e) {

    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = window.pageYOffset;
    if(((scrollHeight - clientHeight) <= scrollTop + 170 ) && (!isLoad)) {
        isLoad = true;
        var xhr = new XMLHttpRequest();

        xhr.open('GET', './data.json', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;

            if (xhr.status === 200 || xhr.status === 201) {
                var data = JSON.parse(xhr.responseText);

                data.goods.forEach(function (item) {
                    var itemNode = document.createElement('div');
                    itemNode.classList.add('item');

                    var previewNode = document.createElement('span');
                    previewNode.classList.add('preview');

                    var imgNode = document.createElement('img');
                    imgNode.src = 'goods/' + item.preview;

                    var titleNode = document.createElement('span');
                    titleNode.classList.add('title');
                    titleNode.appendChild(document.createTextNode(item.title));

                    var priceNode = document.createElement('span');
                    priceNode.classList.add('price');
                    priceNode.appendChild(document.createTextNode(item.price + ' P'));

                    previewNode.appendChild(imgNode);

                    itemNode.appendChild(previewNode)
                    itemNode.appendChild(titleNode)
                    itemNode.appendChild(priceNode)

                    elements.appendChild(itemNode);
                });
            }
           isLoad = false;
        }

        xhr.send();
    }
});