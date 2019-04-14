function onFork (e) {
  e.preventDefault()
  DatArchive.resolveName(location.toString()).then(url => {
    return DatArchive.fork(url, {prompt: true})
  }).then(fork => {
    window.location = "beaker://library/" + fork.url
  })
}

$(document).ready(function(){
  $('button').on('click', onFork)
});