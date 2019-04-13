import breadInfo from '../components/bread.js';
import meatInfo from '../components/meat.js';
import cheeseInfo from '../components/cheese.js';
import veggieInfo from '../components/veggies.js';
import condiInfo from '../components/condiments.js';
import util from './util.js';

  
  
//   const whiteClick = document.getElementById('white'); 



const addBreadIngredient = (e) => {
    breadInfo.addBread(e.target.id);   
};

const addMeatIngredient = (e) => {
    meatInfo.addMeat(e.target.id);
};

const addCheeseIngredient = (e) => {
    cheeseInfo.addCheese(e.target.id);
};

const addVeggieIngredient = (e) => {
    veggieInfo.addVeggie(e.target.id);
};

const addCondiIngredient = (e) => {
    condiInfo.addCondi(e.target.id);
};

const attachEvents = () => {
    document.getElementById('white').addEventListener('click', addBreadIngredient);
    document.getElementById('wheat').addEventListener('click', addBreadIngredient);
    document.getElementById('hardtack').addEventListener('click', addBreadIngredient);

    document.getElementById('meatballs').addEventListener('click', addMeatIngredient);
    document.getElementById('sausage').addEventListener('click', addMeatIngredient);
    document.getElementById('fish').addEventListener('click', addMeatIngredient);

    document.getElementById('gruyere').addEventListener('click', addCheeseIngredient);
    document.getElementById('government').addEventListener('click', addCheeseIngredient);
    document.getElementById('swiss').addEventListener('click', addCheeseIngredient);

    document.getElementById('peppers').addEventListener('click', addVeggieIngredient);
    document.getElementById('pickles').addEventListener('click', addVeggieIngredient);
    document.getElementById('tomato').addEventListener('click', addVeggieIngredient);

    document.getElementById('ketchup').addEventListener('click', addCondiIngredient);
    document.getElementById('marinara').addEventListener('click', addCondiIngredient);
    document.getElementById('A1').addEventListener('click', addCondiIngredient);

    // e.target.className += " selectedButton";
    // breadInfo.
};



export default { attachEvents };