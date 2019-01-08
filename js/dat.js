document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('url').innerText = window.location
  document.getElementById('library-url').href = `beaker://library/${window.location}`

  // is this a Dat-supported website? If so, use a dat:// URL for the beakerbrowser.com link
  const beakerLink = document.getElementById('beaker-url')
  if (window.DatArchive) {
    beakerLink.href = 'dat://beakerbrowser.com'
  } else {
    beakerLink.href = 'https://beakerbrowser.com'
  }
})