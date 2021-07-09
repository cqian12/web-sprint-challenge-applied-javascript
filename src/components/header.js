const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //element creations
  let header = document.createElement('div')
  let dateEl = document.createElement('span')
  let titleEl = document.createElement('h1')
  let tempEl = document.createElement('span')

  //adding classes to elements
  header.classList.add('header')
  dateEl.classList.add('date')
  tempEl.classList.add('temp')

  //adding text content of elements
  dateEl.textContent = date
  titleEl.textContent = title
  tempEl.textContent = temp

  //adding nested elements to header element
  header.appendChild(dateEl)
  header.appendChild(titleEl)
  header.appendChild(tempEl)

  return header //returns parent element
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  
}

export { Header, headerAppender }
