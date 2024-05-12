"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';

const BookingPage = () => {
    const [date, setDate] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date }),
        });
        if (response.ok) {
            alert('Booking successful');
            router.push('/dashboard');
        } else {
            alert('Failed to book');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Book a Service</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <label htmlFor="date" className="block mb-2">Choose a Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="border p-2 w-full"
                    required
                />
                <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit Booking
                </button>
            </form>
        </div>
    );
};

export default BookingPage;
