"use client";
import { useEffect, useState } from 'react';

interface Booking {
    id: number;
    bookingDate: string;
    service: string;
    userId: string; // Include if you want to display or check the user
}

const AdminPage = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('/api/booking');
            if (!response.ok) {
                console.error("Failed to fetch bookings");
                return;
            }
            const data = await response.json();
            setBookings(data.bookings || []);
        };
        fetchBookings();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="mt-4">
                <h2 className="text-lg font-semibold">Current Bookings:</h2>
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.id} className="my-2 p-2 border">
                            Date: {booking.bookingDate} - Service: {booking.service}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminPage;
