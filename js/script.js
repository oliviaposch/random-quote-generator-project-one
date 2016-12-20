const quotes = [
	{
		quote: 'The only true wisdom is in knowing you know nothing.',
		source: 'Socrates',
		citation: 'Socrates. (n.d.). BrainyQuote.com',
		category: 'knowledge'
	},
	{
		quote: 'You can do anything but not everything',
		source: 'David Allen',
		citation: 'Making It All Work',
		year: 2009,
		category: 'productivity'
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		source: 'Mae West',
		citation: 'goodreads',
		year: 1970,
		category: 'Humor, life'
	},
	{
		quote: 'Lieber der Erste hier als der Zweite in Rom .',
		source: 'Gaius Julius Cäsar',
		citation: 'Zitate',
		category: 'Beruf und Wirtschaft'
	},
	{
		quote: 'Das Grosse ist nicht, dies oder das zu sein, sondern man selbst zu sein.',
		source: 'Soren Kierkegaard',
		citation: 'Zitate',
		year: 1840,
		category: 'Menschliches'
	}

];


/* 
event listener to respond to "Show another quote" button clicks
when user clicks anywhere on the button, the "printQuote" function is called
*/
const outputDiv = document.getElementById('loadQuote').addEventListener("click", printQuote, false);
const intervalID = window.setInterval(printQuote, 5000);

// RANDOM OF COLORS
function randomRGB(){
	return Math.floor(Math.random() * 256);
}
function getRandomColor(){

	let color = 'rgb(';
		color += randomRGB() + ',';
		color += randomRGB() + ',';
		color += randomRGB() + ')';
		return color;
}
//console.log(getRandomColor());

//THIS FUNCTION RETURN THE OBJECTS FROM ARRAY QUOTES
function getRandomQuote(){
	let randomQuote = quotes[ Math.floor(Math.random() * quotes.length) ];
	//console.log('randomQuote');
		let quotesObjsList = '<p class="quote">' + randomQuote.quote + '</p>';
			quotesObjsList += '<p class="source">' + randomQuote.source;
			quotesObjsList += ' <span class="citation"> ' + randomQuote.citation + '</span>';
			if (randomQuote.hasOwnProperty('year')) {
				quotesObjsList += '<span class="year"> ' + randomQuote.year + '</span>';	
			}
			if (randomQuote.hasOwnProperty('category')) {
				quotesObjsList += '<br> category: ' + randomQuote.category;	
			}
			quotesObjsList += '</p>';
			return quotesObjsList;
}

// THIS FUNCTION DISPLAY OUR QUOTES AND RANDOM BACKGROUND COLORS ON BUTTON CLICK
function printQuote(){

		let bgColor = getRandomColor();
		document.body.style.backgroundColor = bgColor;

		let printQuoteElements = getRandomQuote();
		document.getElementById('quote-box').innerHTML = printQuoteElements;
		return printQuoteElements;
}


