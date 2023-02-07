import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ExpenseForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const handleInputChange = (e) => {
        console.log({[e.target.name]: e.target.value})
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <>
            <div className='container card'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="title">Expense title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter your title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="amount">Expense Amount</Label>
                        <Input
                            type="text"
                            name="amount"
                            id="amount"
                            placeholder="Enter your amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="date"
                            placeholder="Enter your date"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </>
    )
}

export default ExpenseForm