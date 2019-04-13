import buttonEvents from "./helpers/buttonEvents.js";
import cart from "./components/cart.js";


const init = () =>  {
    buttonEvents.attachEvents();
    document.getElementById('checkout').addEventListener('click', cart.cartToDom);
};


init();