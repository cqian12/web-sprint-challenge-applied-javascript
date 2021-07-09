import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //element creation
  let card = document.createElement('div')
  let headline = document.createElement('div')
  let author = document.createElement('div')
  let imgContainer = document.createElement('div')
  let photo = document.createElement('img')
  let name = document.createElement('span')

  //class naming
  card.classList.add('card')
  headline.classList.add('headline')
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  //adding content of elements
  headline.textContent = article.headline
  photo.src = article.authorPhoto
  name.textContent = `By: ${article.authorName}`

  //appending children to parent element
  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imgContainer)
  author.appendChild(name)
  imgContainer.appendChild(photo)
  
  return card //returns parent element
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let cards = document.querySelector(selector) //element where cards are to be added

  axios.get('http://localhost:5000/api/articles') //obtains articles from endpoint
    .then(res => {
      let articleTopics = Object.keys(res.data.articles) //creates an array populated by the article topics

      articleTopics.forEach(element => { //loops through the topics array, then 
        let currentTopic = res.data.articles[element] //creates an array of articles for each topic
        currentTopic.forEach(article => { //for each article in a topic, creates a card and then
          cards.appendChild(Card(article)) //adds the article card to the cards element
        })
      })
    })
    .catch(err => console.log(err.message)) //displays error message in case of failure to obtain articles
}

export { Card, cardAppender }
