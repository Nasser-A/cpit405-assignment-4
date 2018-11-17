var resObj;

function doClick() {
    var searchTerm = document.getElementById('search').value;
    var xhttp = new XMLHttpRequest();
    // When the request is successful, finished, and response is ready, execute these function
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         resObj = JSON.parse(xhttp.responseText);
  
            var ulE = document.createElement("ul");
           
           
            var i = 0;
            do {
                var l = document.createElement("li");
                var g = document.createElement("img");
                g.style.height = "300px";
                g.style.width = "300px";
              
                
                g.src = resObj.data[i].link;
                if(g.src.endsWith("jpg") || g.src.endsWith("gif")){
                    l.appendChild(g);
                    ulE.appendChild(l);
                }
        
                i++;
            } while (i < resObj.data.length);
        
            document.body.appendChild(ulE);
  
      }
    }
    console.log("https://api.imgur.com/3/gallery/search/top/all/1?q=" + searchTerm)
    // Send an asynchronous HTTP GET request to the given end point (url)
    xhttp.open("GET", "https://api.imgur.com/3/gallery/search/top/all/1?q=" + searchTerm, true);
    xhttp.setRequestHeader("Authorization",
      "Client-ID a0c164583c558ef")
    xhttp.send();
  }
  



