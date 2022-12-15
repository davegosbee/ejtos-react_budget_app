import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { currency,budget, dispatch  } = useContext(AppContext);
    

    const handleSetBudget = (event) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: event.target.value,
		});
	};

	return (
		      
		<div className="alert alert-primary input-group" >
            <div className="input-group-prepend">
            <span class="input-group-text" >Budget: {currency}</span> 
            </div>
            <input class="form-control"
						required='required'
						type='number'
						id='budget'
						value={budget}
                        step='10'
                        size = '6'
						onChange={handleSetBudget}
                        >
						</input>
			
		</div>
       
	);
};

export default Budget;
