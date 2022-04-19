window.onload = function () {
  function getHtml(filename) {
    fetch("./partials/" + filename + ".html")
      .then((res) => res.text()) //注意：此处是res.text()
      .then(data => {
        document.querySelector('.main_cls').innerHTML = data;
      }).catch(err => console.log(err));

  }
  getHtml("home");
  var navItem = document.querySelectorAll('.nav_item');
  // Array.prototype.
  [].forEach.call(navItem, function (item, index, arr) {
    item.addEventListener("click", function (e) {
      getHtml(this.dataset.filename);
    })
  })
}