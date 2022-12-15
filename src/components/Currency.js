import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
	const { currency,currencies, dispatch  } = useContext(AppContext);
    

    const handleSetCurrency = (event) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: event.target.value,
		});
	};

    const handleSetCurrency2 = (val) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: val,
		});
	};

    let currencyDesc = currencies.find(c => c.symbol === currency).description

	return (
		<>
        
        <div className="dropdown alert alert-primary">
        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Currency ({currency} {currencyDesc})
        
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" style={{ backgroundColor: "#198754"}}>
            {
            currencies.map((c) => (
                <li key={c.symbol}><a className="dropdown-item" href="#" onClick={() => handleSetCurrency2(c.symbol)} >{c.symbol} {c.description}</a></li>

            ))}
          
        </ul>
        </div>
       </>
	);
};

export default Currency;
