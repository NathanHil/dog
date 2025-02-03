// filepath: /food-calculator/src/components/IngredientItem.tsx
import React from 'react';

interface IngredientItemProps {
  name: string;
  amount: number;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ name, amount }) => {
  return (
    <tr colSpan="2">
      <td className="ingredient">{name}</td><td className="amount">{amount} grams</td>
    </tr>
  );  
};

export default IngredientItem;