
    let elements = document.querySelector('.elements');
   document.addEventListener('scroll', function (e) {
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let clientHeight = document.documentElement.clientHeight;
  let scrollTop = window.pageYOffset;

  if((scrollHeight - clientHeight) <= scrollTop + 170 ) {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', './data.json', true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;

      if (xhr.status === 200 || xhr.status === 201) {
        var data = JSON.parse(xhr.responseText);

        data.goods.forEach(function (item) {
          var itemNode = document.createElement('div');
            itemNode.classList.add('item');
            itemNode.innerHTML =
                `<span class="preview">
                <img src="goods/${item.preview}" />
                </span>
                <span class="title">${item.title}</span>
                <span class="price">${item.price} </span>`;

          elements.appendChild(itemNode);
        });
      }
    }

    xhr.send();
  }
});
