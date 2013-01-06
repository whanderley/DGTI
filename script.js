function getUrlCheckeds() {
    var vars = [];
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars.push(value);
    });
    return vars;
}

window.onload = function(){
  var checkeds = getUrlCheckeds();
  for(check in checkeds){
    var checked = document.getElementById(checkeds[check]);
    checked.checked = true;
  }
}