import React from 'react';
import Month from './Month';

function MonthlyProduce() {
  return(
    <div>
      {availableProduce.map((thisMonth, index) =>
        <Month month={thisMonth.month}
          selection={thisMonth.selection}
          key={index}/>
      )}
    </div>
  );
}

export default MonthlyProduce;

const availableProduce = [
