function getRandomQuote() {
  const quote = document.getElementById("quote");
  const http = new XMLHttpRequest();
  const url = "http://127.0.0.1:3000/v1/random";
  http.open("GET", url);
  http.send();

  http.onreadystatechange = function(error) {
    if (this.readyState == 4 && this.status) {
      quote.innerHTML = http.responseText;
    }
  };
}

window.onload = getRandomQuote;