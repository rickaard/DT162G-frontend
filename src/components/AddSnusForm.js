import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './AddSnusForm.scss';


const AddSnusForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [successMsg, setSuccessMsg] = useState(false);

    const onSubmit = (data, e) => {
        fetch(process.env.REACT_APP_PUBLIC_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => {
            e.target.reset();
            setSuccessMsg(true);
        })
        .catch(err => console.log(err))
    };


    return (
        <div className="form-wrapper">
            <form className="addsnus-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="brand">Produktmärke: *</label>
                <input type="text" placeholder="T.ex. Kapten, Lundgrens..." name="brand" ref={register({required: true, min: 2, maxLength: 255})} />
                {errors.brand && <span className="error-msg">Detta fält måste fyllas i</span>}

                <label htmlFor="product">Produkttyp: *</label>
                <input type="text" placeholder="T.ex. Vit, Akvavit, Skåne..." name="product" ref={register({required: true, min: 2, maxLength: 255})} />
                {errors.product && <span className="error-msg">Detta fält måste fyllas i</span>}

                <label htmlFor="snusType">Snustyp:</label>
                <input type="text" placeholder="T.ex. Vit portion, Original portion, Lös..." name="snusType" ref={register({maxLength: 255})} />

                <label htmlFor="nicotineAmount">Nikotinhalt:</label>
                <input type="text" placeholder="T.ex. 15 mg/g" name="nicotineAmount" ref={register({maxLength: 255})} />

                <label htmlFor="amountPerBox">Innehåll/förp:</label>
                <input type="text" placeholder="T.ex. 17 g" name="amountPerBox" ref={register({maxLength: 255})} />

                <label htmlFor="producer">Producent:</label>
                <input type="text" placeholder="T.ex. Swedish Match, AG Snus..." name="producer" ref={register({maxLength: 255})} />

                <label htmlFor="misc">Övrigt:</label>
                <input type="text" placeholder="Övrigt om snuset, t.ex. pris, smak, etc..." name="misc" ref={register({maxLength: 255})} />

                <input type="submit" value="Lägg till"/>
                {successMsg && <span className="success-msg">Snus tillagd! Väntar på godkännande..</span>}
            </form>
        </div>
    )
}

export default AddSnusForm
