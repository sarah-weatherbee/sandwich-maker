import cart from '../components/cart.js';

const meatInfo = {
    meatballs: 2,
    sausage: 2,
    fish: 3,
    
   
};

const getMeat = () => {
    return meatInfo;
};


const addMeat = (ingredient) => {
    const ingredientToAdd = {
        name: ingredient,
        price: meatInfo[ingredient],
        type: 'Meat'
    };

    cart.addToCart(ingredientToAdd);
} 

export default { getMeat, addMeat };