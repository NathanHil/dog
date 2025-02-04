// filepath: /food-calculator/src/components/IngredientItem.tsx
import React from 'react';

interface IngredientItemProps {
  name: string;
  amount: number;
  volume?: string;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ name, amount, volume }) => {
  return (
    <tr colSpan="3">
      <td className="ingredient">{name}</td>
      <td className="amount">{amount}</td>
      <td className="amount">{volume}</td>
    </tr>
  );  
};

export default IngredientItem;