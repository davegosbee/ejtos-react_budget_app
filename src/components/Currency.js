import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { currency, dispatch  } = useContext(AppContext);
    

    const handleSetCurrency = (event) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: event.target.value,
		});
	};

	return (
		      
		<div className="alert alert-primary input-group" >
            <div className="input-group-prepend">
            <span class="input-group-text" >Currency:</span> 
            </div>
            <select value={currency} className="custom-select" id="inputGroupSelect01" onChange={handleSetCurrency}>
		
						<option value="£" name="pound">£ Pound</option>
                        <option value="$" name="dollar">$ Dollar</option>
                        <option value="€" name="euro">€ Euro</option>
                        <option value="₹" name="rupee">₹ Rupee</option>
                        
			</select>
			
		</div>
       
	);
};

export default Currency;
