import React from 'react';
import './BuyForm.css';

export default function BuyForm(props) {
    const handleFormChange = props.handleFormChange;
    const handleSubmit = props.handleSubmit;
    const validateName = props.validateName;

    return (
        <form
            className="form"
            onSubmit={handleSubmit}>
            <div>
                <label>
                    Name
                </label>
                <br />
                <input
                    className="NameTextBox"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    onChange={handleFormChange}
                />
                <br />
                <br />
                <label>
                    Message
                        <textarea
                        className="textBox"
                        type="text"
                        name="message"
                        defaultValue="Enter Message..."
                        onChange={handleFormChange}>

                    </textarea>
                </label>
                <br />
                <br />
                <button
                    type="submit"
                    disabled={validateName()}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}