let quoteDiv = document.querySelector('#my-quotes');
let getQuotes = document.querySelector('#get-quotes');

getQuotes.addEventListener('click', function(){
    fetch('https://api.kanye.rest')
    .then(res =>{
    if(!res.ok){
        throw Error(res.status);
    }else{
        return res.json()
    }
    })
    .then(quote =>{
    quoteDiv.innerHTML = `<p> ${quote.quote} </p>`
    })
    .catch(error =>{
    quoteDiv.innerHTML = `<p>${error}</p>`
    });
    
})

let button = document.querySelector('#request-button');
button.addEventListener("click", function(){
let catDiv = document.querySelector('#cat-div');
fetch('https://api.thecatapi.com/v1/images/search')
.then(response => {
    if(!response.ok){
        throw Error(response.status);
    }else{
        return response.json()
    }
})
.then(cats =>{
    cats.forEach(cat =>{
        catDiv.innerHTML = `<img src ="${cat.url}" alt="Great Kitty" width = 70% height =60%>` 
    })    
})
.catch(error =>{
    catDiv.innerHTML = `<p>${error}</p>`
});
});