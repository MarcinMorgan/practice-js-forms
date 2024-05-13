const imagesParent = document.querySelector('.images-list');
const imagesBase = document.querySelector('.images-list__item--prototype');
const inputImg = document.querySelector('input');

inputImg.addEventListener('change', readFile)

function readFile(e) {
    const file = e.target.files;
    for(i=0;i<file.length;i++) {
        const reader = new FileReader();
        const fileSize = file[i].size;
        reader.onload = function(readerEvent) {
            addImage(readerEvent.target.result, fileSize)
        }
        reader.readAsDataURL(file[i])
    }
}

function addImage(imgSrc, imgSize) {
    const clonedImgBase = imagesBase.cloneNode(true);
    clonedImgBase.classList.remove('images-list__item--prototype');
    clonedImgBase.lastElementChild.innerText = imgSize;
    const clonedImgSrc = clonedImgBase.querySelector('img');
    clonedImgSrc.src = imgSrc;
    imagesParent.appendChild(clonedImgBase);
}