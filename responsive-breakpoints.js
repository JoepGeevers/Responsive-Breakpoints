(function() {
  
  var id = "responsive-breakpoints-media-query-listener";
  var sizes = ["xs", "sm", "md", "lg", 'xl'];
  var stored = "";

      document.getElementsByTagName("BODY")[0]
      .insertAdjacentHTML(
      'beforeend',
      '<div id="'+id+'" style="display: none;"><div class="visible-xs-block"></div><div class="visible-sm-block"></div><div class="visible-md-block"></div><div class="visible-lg-block"></div></div>');

  window.setInterval(function() {
        
    var actual = getActualScreenSize(id);

    if (stored !== actual) {
      stored = actual;
      Array.prototype.filter.call(document.getElementsByClassName("responsive-breakpoints"), function(element) {
        setCurrentScreenSize(actual, element);
      });
    }
  }, 100);

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
})();
