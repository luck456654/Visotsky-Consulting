
const popup=document.querySelector(".header__link-popup");
popup.addEventListener('click',popupshowed);
const popup__container=document.querySelector(".main__popup");

function popupshowed(){
    popup__container.style="display:flex;";
}