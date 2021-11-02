const getMemesButtonElement = document.getElementById('get-memes');
getMemesButtonElement.addEventListener('click', createMeme);

const textToHideElement = document.getElementById('text-to-hide');
const imageToDisplayElement = document.getElementById('image-to-display');

function getMemes () { fetch("https://api.imgflip.com/get_memes")
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    textToHideElement.classList.add('d-none');
    imageToDisplayElement.classList.remove('d-none');
    const image = document.getElementById('loaded-meme');
    const meme = responseData.data.memes.find(meme => meme.id === '61544');
    console.log(meme)
    image.src = meme.url;
    
  });
}
function createMeme() {
  const data = {
    template_id: 61544,
    username: "workshopUser",
    password: "workshopUser",
    text0: "когда стал фронтендером",
    text1: "за воркшоп"
  }
  const formData  = new FormData();

  for(const name in data) {
    formData.append(name, data[name]);
  }
  fetch(`https://api.imgflip.com/caption_image`, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
     }
  }).then((response) => {
    console.log(response)
    return response.json();
  })
  .then((responseData) => {
    console.log(responseData)
    textToHideElement.classList.add('d-none');
    imageToDisplayElement.classList.remove('d-none');
    const image = document.getElementById('loaded-meme');
    image.src = responseData.data.url;
    
  });
}

function getAllMemes() {
  const allMemesHtml = responseData.data.memes.reduce((acc, meme) => {
    return acc + `${meme.id}<img id="loaded-meme" src="${meme.url}" height="500" class="rounded" alt="meme" >`
  },"");
  imageToDisplayElement.innerHTML = htmlka;
}
