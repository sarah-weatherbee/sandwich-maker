import util from "../helpers/util.js";

let cart = [];

const getCart = () => {
    return cart;
};

const addToCart = (ingredientToAdd) => {
    cart.push(ingredientToAdd);
};

const cartToDom = () => {
    const myCart = getCart();
    const totalcost = myCart.reduce((a, b)=> {return a + b.price},0) //method sums the cost
    let domString = `<div>`;
    myCart.forEach((ingredient) => {
    domString += `<div>`;
    domString += `<h5>${ingredient.type}: ${ingredient.name} $${ingredient.price}</h5>`;
    domString += `</div>`;
    domString += `</div>`;
});
domString += `<h3>Total = $${totalcost}</h3>`;
util.printToDom('cart-container', domString);


};



export default { addToCart, cartToDom };