// Function top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "asideInfo.xml", true);
    xmlhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        displayLinks(this);
      }
    };
    xmlhttp.send();
  
    function displayLinks(xml) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xml.responseText, "application/xml");
      var links = xmlDoc.getElementsByTagName("link");
      var linkList = document.getElementById("linkList");
  
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var text = link.getElementsByTagName("text")[0].textContent;
        var url = link.getElementsByTagName("url")[0].textContent;
  
        var listItem = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", url);
        anchor.setAttribute("target", "_blank");
        anchor.textContent = text;
  
        listItem.appendChild(anchor);
        linkList.appendChild(listItem);
      }
    }
  });
