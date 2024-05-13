const imagesParent = document.querySelector('.images-list');
const imagesBase = document.querySelector('.images-list__item--prototype');
const inputImg = document.querySelector('input');

inputImg.addEventListener('change', readFile)

function readFile(e) {
    const file = e.target.files;
    for(i=0;i<file.length;i++) {
        const reader = new FileReader();
        const fileName = file[i].name;
        const fileSize = Number.parseFloat(file[i].size/1048576).toFixed(2);
        reader.onload = function(readerEvent) {
            addImage(fileName, readerEvent.target.result, fileSize)
        }
        reader.readAsDataURL(file[i])
    }
}

function addImage(imgName, imgSrc, imgSize) {
    const clonedImgBase = imagesBase.cloneNode(true);
    clonedImgBase.classList.remove('images-list__item--prototype');
    clonedImgBase.firstElementChild.innerText = imgName;
    clonedImgBase.lastElementChild.innerText = imgSize+' MB';
    const clonedImgSrc = clonedImgBase.querySelector('img');
    clonedImgSrc.src = imgSrc;
    imagesParent.appendChild(clonedImgBase);
}