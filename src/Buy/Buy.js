import React, { useState } from 'react';
import BuyForm from '../BuyForm/BuyForm';
import axios from 'axios';

export default function Buy(props) {
    const [currentStateValues, updateState] = useState({
        name: '',
        message: '',
    });

    const handleFormChange = (event) => {
        if (event.target.name) {
            const formKeyText = event.target.name
            const formValueText = event.target.value
            updateState(previousStateValues => {
                return { ...previousStateValues, [formKeyText]: formValueText }
            })
        }
    };

    function validateName() {
        const name = currentStateValues.name.trim();
        if (name.length === 0) {
            return 'Name is required';
        } else if (name.length < 3) {
            return 'Name must be at least 3 characters long';
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: currentStateValues
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    };

    function resetForm(){
        updateState({
            name: '',
            message: '',
    })
}

return (
    <section>
        <h1>Purchase This Varitone</h1>
        <BuyForm
            validateName={validateName}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
        />
    </section>
)
}