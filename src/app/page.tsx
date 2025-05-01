'use client';

import Chat from '@/components/ui/chat';
import { useEffect, useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/hello');
            const data = await response.json();
            setMessage(data.message);
        };
        fetchData();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold">Message from Backend: {message}</h1>
            <p className="text-lg mt-4">This is a simple chat application.</p>
            <Chat/>
        </main>
    );
}