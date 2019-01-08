const CHANNEL_URL = 'im-currently-reading'
const QUERIES = '?total_pages=1&per=5'

const fullUrl = `https://api.are.na/v2/channels/${CHANNEL_URL}/contents${QUERIES}`
const xhr = new XMLHttpRequest();

function addArticle(articleTitle, articleUrl, list) {
  if (articleTitle.length > 50) {
    articleTitle = articleTitle.slice(0, 46) + '...'
  }

  const outerDiv = document.createElement('div')
  const span = document.createElement('span')
  span.innerHTML = '-&nbsp;'
  outerDiv.append(span)

  const link = document.createElement('a')
  link.setAttribute('class', 'hover-flare')
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.href = articleUrl

  const textSpan = document.createElement('span')
  textSpan.setAttribute('class', 'underline')
  textSpan.innerText = articleTitle

  const arrowSpan = document.createElement('span')
  arrowSpan.setAttribute('class', 'link-arrow flare')
  arrowSpan.innerHTML = '&rarr;'


  link.append(textSpan)
  link.append(arrowSpan)

  outerDiv.append(link)
  list.append(outerDiv)
}


window.onload = function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {   // XMLHttpRequest.DONE == 4
      const reading = document.getElementById('reading')
      const title = document.createElement('div')
      title.setAttribute('class', 'link-list-title')
      title.innerText = 'READING...'
      reading.append(title)

      const list = document.createElement('div')
      list.setAttribute('class', 'link-list')
      reading.append(list)

      JSON.parse(xmlhttp.responseText)
        .contents.reverse().map(x => addArticle(x.title, x.source.url, list))
    }
  };

  xmlhttp.open("GET", fullUrl, true);
  xmlhttp.send();
}
