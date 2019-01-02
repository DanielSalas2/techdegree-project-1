
/*array of objects with random quotes*/
var quotes =
[
  {quote: "Winning isn't getting ahead of others. It's getting ahead of yourself.", source:"Roger Staubach"},
  {quote: "Once you learn to quit, it becomes a habit.", source:"Vince Lombardi", year:"1959"},
  {quote: "I'm blessed every day I wake up. So I just try to maximize every day to the fullest", source:"Marshawn Lynch"},
  {quote: "The only discipline that lasts, is self discipline", source:"Bum Philips", year:"1970"},
  {quote: "In order to win the game, you must first not lose it.", source:"Chuck Noll"},
  {quote: "If you're not gonna go all the way, why go at all?", source:"Joe Namath", year:"1965"},
  {quote: "Success isn’t owned. It’s leased, and rent is due every day.", source:"J.J. Watt"}
];
//Function retrieves a quote by picking a random number and using it as a the index of the array of quotes
function getRandomQuote()
{
  var random = Math.floor(Math.random() * 7);
  var randoQuote = quotes[random];
  return randoQuote;
};

//calls the getRandomQuote function and prints the quote
function printQuote()
{
  var randomgen = getRandomQuote();

  var quoteText = '<p class="quote">'+ randomgen.quote + '</p>' + " -"
  + '<p class="source">' + randomgen.source + '</p>' ;

  if(randomgen.year)
  {
     quoteText =  '<p class="quote">'+ randomgen.quote + '</p>' + " -"
     + '<p class="source">' + randomgen.source + " " + '<span class="citation">' + randomgen.year + "</span>"  + '</p>';
     document.getElementById("quote-box").innerHTML = quoteText;
    return quoteText;
  }
  else{
    document.getElementById("quote-box").innerHTML = quoteText;
  return quoteText;
}
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
