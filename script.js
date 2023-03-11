const quoteText=document.getElementById('quote-text'),
      quoteTags=document.getElementById('quote-tag'),
      quoteAuthor=document.getElementById('quote-author'),
      genquoteBtn=document.getElementById('get-quote-btn');
     
function randomQuotes(){
    fetch('https://api.quotable.io/random')
    .then(response =>response.json())
    .then( data => {
        quoteText.textContent=data.content;
        quoteTags.textContent=data.tags;
        quoteAuthor.textContent=`--${data.author}`;
    });
}

randomQuotes();
genquoteBtn.addEventListener('click',() => {
    randomQuotes();
});
      