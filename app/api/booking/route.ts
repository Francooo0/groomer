import { NextApiRequest, NextApiResponse } from 'next';
// Muudame importi getSession meetodi jaoks
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import prisma from '@/lib/prisma';  // Kohandage vajaduse korral teekonda

async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Kasutame getKindeServerSession meetodit sessiooni hankimiseks
    const session = await getKindeServerSession(req);
    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    switch (req.method) {
        case 'POST':
            return await createBooking(req, res, session.userId);
        case 'GET':
            return await getBookings(res);
        case 'DELETE':
            return await deleteBooking(req, res, session.userId);
        default:
            res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

async function createBooking(req: NextApiRequest, res: NextApiResponse, userId: string) {
    const { service, bookingDate } = req.body;
    try {
        const booking = await prisma.booking.create({
            data: {
                userId,
                service,
                bookingDate: new Date(bookingDate + 'Z'),  // Töötleme ajatsooni, eeldades, et sisend on UTC
            },
        });
        res.status(201).json(booking);
    } catch (error: any) { // Määrame error objektile tüübi any
        res.status(500).json({ error: 'Failed to create booking', details: error.message });
    }
}

async function getBookings(res: NextApiResponse) {
    try {
        const bookings = await prisma.booking.findMany();
        res.status(200).json({ bookings });
    } catch (error: any) { // Määrame error objektile tüübi any
        res.status(500).json({ error: 'Failed to fetch bookings', details: error.message });
    }
}

async function deleteBooking(req: NextApiRequest, res: NextApiResponse, userId: string) {
    const { id } = req.body;
    try {
        const booking = await prisma.booking.findUnique({ where: { id } });
        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        if (booking.userId !== userId) {  // Kontrollime kasutaja autoriseerimiseks
            return res.status(403).json({ error: 'You do not have permission to delete this booking' });
        }
        await prisma.booking.delete({ where: { id } });
        res.status(204).end();
    } catch (error: any) { // Määrame error objektile tüübi any
        res.status(500).json({ error: 'Failed to delete booking', details: error.message });
    }
}

export default handler;
