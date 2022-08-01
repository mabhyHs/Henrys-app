

export function setImgError(e, img){
    if(!img) return;
    e.target.src = img;
}