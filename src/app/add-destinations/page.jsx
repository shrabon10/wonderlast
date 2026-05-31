'use client';

import {
    FieldError,
    Input,
    Label,
    TextField,
    Select,
    ListBox,
    TextArea,
    Button,
} from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const AddDestinations = () => {
    const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const destination = Object.fromEntries(formData.entries());

    try {
        const res = await fetch('http://localhost:5000/destination', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(destination),
        });

        const data = await res.json();

        if (res.ok) {
            toast.success('Destination added successfully!');
            form.reset(); // <-- form clear hobe
            console.log(data);
        } else {
            toast.error(data.message || 'Failed to add destination');
        }
    } catch (error) {
        console.error(error);
        toast.error('Something went wrong!');
    }
};

    return (
        <div className="p-5 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center">
                Add Destination
            </h2>

            <form
                onSubmit={onSubmit}
                className="p-10 space-y-8 w-3xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                        <TextField name="destinationName" isRequired>
                            <Label>Destination Name</Label>
                            <Input placeholder="Bali Paradise" />
                            <FieldError />
                        </TextField>
                    </div>

                    <TextField name="country" isRequired>
                        <Label>Country</Label>
                        <Input placeholder="Indonesia" />
                        <FieldError />
                    </TextField>

                    <TextField name="price" type="number" isRequired>
                        <Label>Price (USD)</Label>
                        <Input type="number" placeholder="1299" />
                        <FieldError />
                    </TextField>

                    <TextField name="duration" isRequired>
                        <Label>Duration</Label>
                        <Input placeholder="7 Days / 6 Nights" />
                        <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                        <TextField
                            name="departureDate"
                            type="date"
                            isRequired
                        >
                            <Label>Departure Date</Label>
                            <Input type="date" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/image.jpg"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea placeholder="Describe the travel experience..." />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-cyan-500 text-white"
                >
                    Add Destination
                </Button>
            </form>
        </div>
    );
};

export default AddDestinations;