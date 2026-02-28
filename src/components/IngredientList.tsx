// filepath: /food-calculator/src/components/IngredientList.tsx
import React from 'react';
import IngredientItem from './IngredientItem.tsx';

interface IngredientListProps {
  days: number;
}

const IngredientList: React.FC<IngredientListProps> = ({ days }) => {
  const ingredients = {
    chicken: days * 301, // 296 grams of chicken per day
    canola: days * 18,
    rice: days * 128,
    apples: days * 68, 
    carrots: days * 28,
    kale: days * 23,
    salt: days * 3,
    omega3: days * 0.92,
    balanceit: days * 9.69
  };

  return (
    <div className="ingredient-list">
      <table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Grams</th>
            <th>Simple</th>
          </tr>
        </thead>
        <tbody>
        <IngredientItem name="Chicken (cooked)" amount={ingredients.chicken} volume={(ingredients.chicken/453.592).toFixed(2)+" lbs"} />
        <IngredientItem name="Chicken (raw)" amount={ingredients.chicken/0.735} volume={((ingredients.chicken/0.735)/453.592).toFixed(2)+" lbs"} />
        <IngredientItem name="Canola Oil" amount={ingredients.canola} />
        <IngredientItem name="Rice" amount={ingredients.rice} />
        <IngredientItem name="Apples" amount={ingredients.apples} />
        <IngredientItem name="Carrots" amount={ingredients.carrots} />
        <IngredientItem name="Kale" amount={ingredients.kale} />
        <IngredientItem name="Salt" amount={(ingredients.salt).toFixed(2)} volume={(days * 0.4).toFixed(2)+" tsp"} />
        <IngredientItem name="Omega-3" amount={(ingredients.omega3).toFixed(2)} volume={(days * 0.191356628461).toFixed(2)+" tsp"} />
        <IngredientItem name="BalanceIT" amount={(ingredients.balanceit).toFixed(2)} volume={(days * 0.07008).toFixed(1)+" Cups"}/>
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;