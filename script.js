// let apiQuotes = [];

// Show New Quote
function newQuote() {
  //Pick a Random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
}

//  Get Quotes From API
// async function getQuotes() {
//   const apiURL = "https://type.fit/api/quotes";

//   try {
//     const response = await fetch(apiURL);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // Catch Error Here
//   }
// }

// On Load
// getQuotes();

newQuote();
