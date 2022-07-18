const request = new Request('https://dog.ceo/api/breeds/image/random');

const body = document.getElementById('corpo');

const btn = document.getElementById('button');

const img = document.getElementById('imagem');

const updateDogImage = async () => {
  disableButton();
  const response = await fetch(request);

  const data = await response.json();

  img.src = data.message;
  document.querySelector('#imagem').innerHTML = img;
};

const disableButton = () => {
  btn.disabled = true;
  btn.innerHTML = 'Loading Dog';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = 'Random Dog';
  }, 1500);
};

btn.addEventListener('click', async () => {
  await updateDogImage();
});

body.addEventListener('load', updateDogImage());
