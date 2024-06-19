// // Get Quote From Free API & Solution To CORS [Optional Function]
// async function getQuotes() {
//   //solution to CORS error
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
//   const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//   try {
//     const response = await fetch(proxyUrl + apiUrl);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     getQuote();
//     console.log('whoops, no quote', error);
//   }
// }
// // On Load
// getQuotes();

/* Creating a random quote generator from a local file if the API
   stops working or has problems - alternate method */ 

// function newQuote() {
//   const quote = localquotes[Math.floor(Math.random() * localquotes.length)];
//   console.log(quote);
// }
// newQuote();

/* Get Quotes from API / Fetch request / Separate function to pick random quote - 
   a better option as the API can be updated*/