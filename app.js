var image = document.querySelector('.dog-image');
var api = 'https://dog.ceo/api/breeds/image/random';

function fetchDog() {
  console.log("click registerd")
  console.log(image);
  fetch(api).then(response => {
  return response.json();

  }).then(jsonResponse => {
    image.src=jsonResponse.message;
  })
}
