// filepath: /food-calculator/src/components/IngredientList.tsx
import React from 'react';
import IngredientItem from './IngredientItem.tsx';

interface IngredientListProps {
  days: number;
}

const IngredientList: React.FC<IngredientListProps> = ({ days }) => {
  const ingredients = {
    chicken: days * 259.65, // 301 grams of chicken per day
    canola: days * 15.52,
    rice: days * 110.4,
    uncookedRice: days * 0.1948,
    apples: days * 58.66, 
    carrots: days * 24.15,
    kale: days * 19.84,
    salt: days * 2.59,
    omega3: days * 0.794,
    balanceit: days * 8.59,
    total: days * (259.65+15.52+110.4+0.1948+58.66+24.15+19.84+2.59+0.794+8.59)
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
        <IngredientItem name="Chicken (cooked)" amount={ingredients.chicken.toFixed(0)} volume={(ingredients.chicken/453.592).toFixed(2)+" lbs"} />
        <IngredientItem name="Chicken (raw)" amount={(ingredients.chicken/0.735).toFixed(0)} volume={((ingredients.chicken/0.735)/453.592).toFixed(2)+" lbs"} />
        <IngredientItem name="Canola Oil" amount={ingredients.canola.toFixed(0)} />
        <IngredientItem name="Rice (cooked)" amount={ingredients.rice.toFixed(0)} volume={(ingredients.uncookedRice).toFixed(2)+" Cups uncooked"}/>
        <IngredientItem name="Apples" amount={ingredients.apples.toFixed(0)} />
        <IngredientItem name="Carrots" amount={ingredients.carrots.toFixed(0)} />
        <IngredientItem name="Kale" amount={ingredients.kale.toFixed(0)} />
        <IngredientItem name="Salt" amount={(ingredients.salt).toFixed(2)} volume={(days * 0.4).toFixed(2)+" tsp"} />
        <IngredientItem name="Omega-3" amount={(ingredients.omega3).toFixed(2)} volume={(days * 0.191356628461).toFixed(2)+" tsp"} />
        <IngredientItem name="BalanceIT" amount={(ingredients.balanceit).toFixed(2)} volume={(days * 0.07008).toFixed(1)+" Cups"}/>
        <tr><td><strong>Total</strong></td><td>{ingredients.total.toFixed(2)} g</td><td><strong>{((ingredients.total / days)/2).toFixed(2)}g</strong> per meal</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;