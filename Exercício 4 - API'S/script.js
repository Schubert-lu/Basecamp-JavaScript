const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementByld('change-cat');


const getCats = async () => {
   try{

    const data = await fetch(BASE_URL);
    const json = await data.json();
    return json.webpurl;
   }
   catch (e) {
       console.log(e.message);
   }
};

const loading = async () => {
    const catImg = document.getElementByld('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loading);

loading();