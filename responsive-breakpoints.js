(function() {
  var id = "responsive-breakpoints";
  var sizes = ["xs", "sm", "md", "lg", "xl"];
  var stored = "";

  writeHtmlElementsToPoll(id, sizes);

  window.setInterval(pollScreenSize, 100);

  function pollScreenSize() {
    var actual = getActualScreenSize(id);

    if (stored !== actual) {
      stored = actual;
      Array.prototype.filter.call(document.getElementsByClassName(id), function(
        element
      ) {
        setCurrentScreenSize(actual, element);
      });
    }
  }

  function getActualScreenSize(id) {
    return Array.prototype.slice
      .call(document.getElementById(id).childNodes)
      .filter(function(node) {
        return node.nodeType == Node.ELEMENT_NODE;
      })
      .filter(function(node) {
        return window.getComputedStyle(node).display != "none";
      })[0]
      .className.split("-")[1];
  }

  function setCurrentScreenSize(newSize, element) {
    sizes.forEach(function(size) {
      if (size == newSize) {
        $(element).addClass(size);
      } else {
        $(element).removeClass(size);
      }
    });
  }

  function writeHtmlElementsToPoll(id, sizes) {
    var children = sizes
      .map(function(size) {
        return `<div class="visible-${size}-block"></div>`;
      })
      .reduce(function(sum, value) {
        return sum + value;
      });

    var parent = `<div id="${id}" style="display: none;">${children}</div>`;

    document
      .getElementsByTagName("BODY")[0]
      .insertAdjacentHTML("beforeend", parent);
  }
})();
