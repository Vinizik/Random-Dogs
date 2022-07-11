const request = new Request('https://dog.ceo/api/breeds/image/random');

function updateDogImage() {
    fetch(request)
        .then(function (response) {
            return response.json();
        })
            .then(function (data) {
                let objectURL = data.message
                let img = `<img src="${objectURL}" />`
                document.querySelector('#imagem').innerHTML = img;
            })}