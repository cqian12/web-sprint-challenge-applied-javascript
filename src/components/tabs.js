import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  let topicsDiv = document.createElement('div') //creates parent element
  //console.log(typeof topics)

  topics.forEach((topic) => { //iterates though topics array and creates a div with class "tab" for each, then appends to the parent element
    console.log(topic)
    let tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topic
    topicsDiv.appendChild(tab)
  })

  return topicsDiv //returns parent element
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  let tabs = document.querySelector(selector)

  axios.get('http://localhost:5000/api/topics')
    .then (res => {
      //let topicsData = []
      console.log(res.data.topics) 
      // res.data.forEach((element) => {
      //   topicsData.push(element)
      // })
      tabs.appendChild(Tabs(res.data.topics))
    })
    .catch(err => console.log(err.message))
}

export { Tabs, tabsAppender }
