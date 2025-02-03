// filepath: /food-calculator/src/components/IngredientList.tsx
import React from 'react';
import IngredientItem from './IngredientItem.tsx';

interface IngredientListProps {
  days: number;
}

const IngredientList: React.FC<IngredientListProps> = ({ days }) => {
  const ingredients = {
    chicken: days * 296, // 296 grams of chicken per day
    canola: days * 16,
    rice: days * 119,
    apples: days * 61, 
    carrots: days * 28,
    kale: days * 21,
    salt: days * 2,
    omega3: days * 0.83,
    balanceit: days * 8.76
  };

  return (
    <div className="ingredient-list">
      <h2>Ingredients</h2>
      <table>
        <tbody>
        <IngredientItem name="Chicken" amount={ingredients.chicken} />
        <IngredientItem name="Canola Oil" amount={ingredients.canola} />
        <IngredientItem name="Rice" amount={ingredients.rice} />
        <IngredientItem name="Apples" amount={ingredients.apples} />
        <IngredientItem name="Carrots" amount={ingredients.carrots} />
        <IngredientItem name="Kale" amount={ingredients.kale} />
        <IngredientItem name="Salt" amount={(ingredients.salt).toFixed(2)} />
        <IngredientItem name="Omega-3" amount={(ingredients.omega3).toFixed(2)} />
        <IngredientItem name="BalanceIT" amount={(ingredients.balanceit).toFixed(2)} />
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;