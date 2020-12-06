import menuList from '../templates/menuList.hbs'
import menu from '../menu.json';


const refs = {
    gallery: document.querySelector('.js-menu'),
}

const markup = menuList(menu);

refs.gallery.insertAdjacentHTML('beforeend', markup);