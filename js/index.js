(function(window, document){
  function getURLParameter(name) {
    return decodeURIComponent(
      (
        new RegExp(
          '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)'
        ).exec(
          window.location.search || window.location.hash || ""
        ) || [null, '']
      )[1].replace(
        /\+/g, '%20'
      )
    ) || null;
  }
  var thing = getURLParameter("z");
  if (thing) {
    document.body.innerHTML = "<br/><br/><br/><h1>" + thing + " has been absolutely DDoSed and Wrecked</h1>";
  }
  function goToUrl() {
    var param = document.getElementById("k").value;
    if (!param) {
      return;
    }
    var result = window.location.href;
    if (/\?/.test(result)) {
      result = result.replace(/&z=[^&\n]+/, "");
      result += "&z=" + encodeURIComponent(param);
    } else {
      result += "?z=" + encodeURIComponent(param);
    }
    window.location = result;
  }
  function buttonGo() {
    return goToUrl();
  }
  document.getElementById("buttonThing").addEventListener("click", function() { buttonGo(); });
})(window, document);
