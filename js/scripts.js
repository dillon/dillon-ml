// scripts.js
const projectData = {
  Engineering: {
    links: [
      {
        title: 'Github',
        link: 'https://github.com/dillon'
      },
      {
        title: 'Monitor',
        document: 'monitor.html'
      }
    ]
  },
  Curating: {
    links: [
      {
        title: '40 Pest Street',
        link: 'https://40peststreet.ml'
      },
      {
        title: 'Curiosities',
        link: 'https://curiosities.ml'
      }
    ]
  },
  Writing: {
    links: [
      {
        title: 'The Choice is Yours',
        link: 'http://dismagazine.com/dystopia/83736/the-choice-is-yours/'
      },
      {
        title: 'The File Room',
        link: 'https://rhizome.org/editorial/2016/nov/17/antoni-muntadas-the-file-room/'
      }
    ]
  },
}

function iframeLoaded() {
  var iFrameID = document.getElementById('idIframe');
  if (iFrameID) {
    // here you can make the height, I delete it first, then I make it again
    iFrameID.height = "";
    iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
  }
}


window.onload = function () {
  const categories = document.getElementsByClassName("category");
  for (let i = 0; i < categories.length; i++) {
    const main = document.getElementById("tree");
    categories[i].addEventListener('click', function () {
      let oldNode = document.getElementById("node")
      newNode = document.createElement('div')
      newNode.setAttribute('id', 'node')
      const category = categories[i].textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()
      projectData[category].links.map((x) => {
        const a = document.createElement("a")
        a.innerHTML = x.title
        a.setAttribute('class', 'block')
        if (x.link) {
          // if it links externally, add that link
          a.href = x.link
          a.classList.add('external-link')
          a.setAttribute('target', '_blank')
          a.setAttribute('rel', 'noopener')
        } else {
          // if it doesn't, add a click event listener
          a.addEventListener('click', function () {
            const object = document.createElement('object');
            object.type = 'text/html'
            object.data = x.document
            object.width = '100%';
            object.setAttribute('min-height', '101%')
            main.appendChild(object)
          });
        }
        newNode.append(a);
      });
      if (oldNode) oldNode.replaceWith(newNode)
      else main.appendChild(newNode)
    })
  }

}
