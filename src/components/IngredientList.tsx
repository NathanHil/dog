// filepath: /food-calculator/src/components/IngredientList.tsx
import React from 'react';
import IngredientItem from './IngredientItem.tsx';

interface IngredientListProps {
  days: number;
}

const IngredientList: React.FC<IngredientListProps> = ({ days }) => {
  const meals = {
    grams: 200,
    count: 200*2
  }
  const ratios = {
    gramPerMeal: meals.grams,
    totalGrams: days * meals.count,
    chx: 0.5189,
    oil: 0.03104,
    rce: 0.2208,
    unc: 0.2208,
    apl: 0.11732,
    crt: 0.0483,
    kle: 0.03968,
    slt: 0.00518,
    om3: 0.001588,
    bal: 0.01718
  }
  const ingredients = {
    chicken: ratios.totalGrams * ratios.chx,       // 301 grams of chicken per day 51.89%
    canola: ratios.totalGrams * ratios.oil,        // 3.104%
    rice: ratios.totalGrams * ratios.rce,          // 22.08%
    uncookedRice: (ratios.totalGrams * ratios.rce) * 0.001516494337765,  // 0.003896 ratio
    apples: ratios.totalGrams * ratios.apl,        // 11.732%
    carrots: ratios.totalGrams * ratios.crt,       // 4.83%
    kale: ratios.totalGrams * ratios.kle,          // 3.968%
    salt: ratios.totalGrams * ratios.slt,          // 0.518%
    omega3: ratios.totalGrams * ratios.om3,        // 0.1588%
    balanceit: ratios.totalGrams * ratios.bal      // 1.718%
  }
  const totals = {
    totalGrams: ingredients.chicken+ingredients.canola+ingredients.rice+ingredients.apples+ingredients.carrots+ingredients.kale+ingredients.salt+ingredients.omega3+ingredients.balanceit,
    totalPerDay: (ingredients.chicken+ingredients.canola+ingredients.rice+ingredients.apples+ingredients.carrots+ingredients.kale+ingredients.salt+ingredients.omega3+ingredients.balanceit)/days
  }

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
        <IngredientItem 
          name="Chicken (cooked)" 
          amount={ingredients.chicken.toFixed(0)} 
          volume={(ingredients.chicken/453.592).toFixed(2)+" lbs"} />
        <IngredientItem 
          name="Chicken (raw)" 
          amount={(ingredients.chicken/0.735).toFixed(0)} 
          volume={((ingredients.chicken/0.735)/453.592).toFixed(2)+" lbs"} 
          style={{ color: "grey", fontStyle: "italic"}} />
        <IngredientItem 
          name="Canola Oil" 
          amount={ingredients.canola.toFixed(0)} />
        <IngredientItem 
          name="Rice (cooked)" 
          amount={ingredients.rice.toFixed(0)} 
          volume={(ingredients.uncookedRice).toFixed(2)+" Cups uncooked"}/>
        <IngredientItem 
          name="Apples" 
          amount={ingredients.apples.toFixed(0)} />
        <IngredientItem 
          name="Carrots" 
          amount={ingredients.carrots.toFixed(0)} />
        <IngredientItem 
          name="Kale" 
          amount={ingredients.kale.toFixed(0)} />
        <IngredientItem 
          name="Salt" 
          amount={(ingredients.salt).toFixed(2)} 
          volume={(ingredients.salt * 0.166708).toFixed(2)+" tsp"} />
        <IngredientItem 
          name="Omega-3" 
          amount={(ingredients.omega3).toFixed(2)} 
          volume={(ingredients.omega3 * 0.22).toFixed(2)+" tsp"} />
        <IngredientItem 
          name="BalanceIT" 
          amount={(ingredients.balanceit).toFixed(2)} 
          volume={(ingredients.balanceit * 0.008).toFixed(1)+" Cups"}/>
        <tr><td><strong>Total</strong></td><td>{totals.totalGrams.toFixed(0)} g</td><td><strong>{((totals.totalPerDay)/2).toFixed(0)}g</strong> per meal ({days*2})</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default IngredientList;