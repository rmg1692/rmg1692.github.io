const quotes = [
	'You cannot shake hands with a clenched fist. -Indira Gandhi',
	'Let us sacrifice our today so that our children can have a better tomorrow. -A. P. J. Abdul Kalam',
	'Learning never exhausts the mind. -Leonardo da Vinci',
	'All that we see or seem is but a dream within a dream. -Edgar Allan Poe',
	'If you cannot do great things, do small things in a great way. -Napoleon Hill',
	'The supreme art of war is to subdue the enemy without fighting. -Sun Tzu',
	'Happiness can exist only in acceptance. -George Orwell ',
	'Love has no age, no limit; and no death. -John Galsworthy ',
	'You can\'t blame gravity for falling in love. -Albert Einstein ',
	'Honesty is the first chapter in the book of wisdom. -Thomas Jefferson ',
	'The journey of a thousand miles begins with one step. -Lao Tzu ',
	'Whoever is happy will make others happy too. -Anne Frank ',
	'I have not failed. I\'ve just found 10,000 ways that won\'t work. -Thomas A.Edison '
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
