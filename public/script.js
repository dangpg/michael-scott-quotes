function getRandomQuote() {
  const quote = document.getElementById("quote");
  const http = new XMLHttpRequest();
  const url = "https://michael-scott-quote.herokuapp.com/v1/random";
  http.open("GET", url);
  http.send();

  http.onreadystatechange = function(error) {
    if (this.readyState == 4 && this.status) {
      quote.innerHTML = http.responseText;
    }
  };
}

window.onload = getRandomQuote;