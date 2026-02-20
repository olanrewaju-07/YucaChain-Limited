import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        // Example SMTP integration using nodemailer or generic API call
        console.log(`Sending email to info@yucachain.com (fallback yucachain@gmail.com)`);
        console.log(`From: ${name} <${email}>\nMessage: ${message}`);

        // Simulate SMTP delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Return success JSON
        return NextResponse.json({ success: true, message: 'Message sent successfully.' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
