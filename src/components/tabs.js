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
  topicsDiv.classList.add('topics') //adds "topics" class to element

  topics.forEach((topic) => { //iterates though topics array and creates a div with class "tab" for each
    let tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topic //adds topic name to each div
    topicsDiv.appendChild(tab) //appends to the parent element
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

  let tabs = document.querySelector(selector) //selects the element in the DOM that tabs should be added to

  axios.get('http://localhost:5000/api/topics') //pulls topics from endpoint
    .then (res => 
      tabs.appendChild(Tabs(res.data.topics))) //adds each topic to the parent element
    .catch(err => console.log(err.message)) //displays error message in case of failure to obtain topics
}

export { Tabs, tabsAppender }
