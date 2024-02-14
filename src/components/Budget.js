import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget } = useContext(AppContext); 
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseFloat(event.target.value);
        setNewBudget(newBudgetValue); // update local state
        setBudget(newBudgetValue); // update context value
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
