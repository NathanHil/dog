// filepath: /food-calculator/src/components/IngredientItem.tsx
import React from 'react';

interface IngredientItemProps {
  name: string;
  amount: number;
  volume?: string;
  style?: React.CSSProperties;
}

const IngredientItem: React.FC<IngredientItemProps> = ({ name, amount, volume, style}) => {
  return (
    <tr colSpan="3" style={style}>
      <td className="ingredient">{name}</td>
      <td className="amount">{amount}</td>
      <td className="volume">{volume}</td>
    </tr>
  );  
};

export default IngredientItem;