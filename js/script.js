
/*array of objects with random quotes*/
var quotes =
[
  {quote: "Winning isn't getting ahead of others. It's getting ahead of yourself.", source:"Roger Staubach"},
  {quote: "Once you learn to quit, it becomes a habit.", source:"Vince Lombardi", year:"1959"},
  {quote: "I'm blessed every day I wake up. So I just try to maximize every day to the fullest", source:"Marshawn Lynch"},
  {quote: "The only discipline that lasts, is self discipline", source:"Bum Philips", year:"1970"},
  {quote: "In order to win the game, you must first not lose it.", source:"Chuck Noll"},
  {quote: "If you're not gonna go ALL the way, why go at all?", source:"Joe Namath", year:"1965"},
  {quote: "Success isn’t owned. It’s leased, and rent is due every day.", source:"J.J. Watt"}
];
//Function retrieves a quote by picking a random number and using it as a the index of the array of quotes
function getRandomQuote()
{
  var random = Math.floor(Math.random() * 7);
  var randoQuote = quotes[random];
  return randoQuote;
};



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/


//document.getElementById('loadQuote').addEventListener("click", printQuote, false);
