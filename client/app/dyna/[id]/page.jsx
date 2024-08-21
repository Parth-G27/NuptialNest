"use client"; // Mark this component as a client component

import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Import from 'next/navigation'

const Page = () => {
    const router = useRouter(); // Now it's safe to use useRouter in a client component

    return (
        <div>
            <h1>Dynamic Page</h1>
            <button onClick={() => router.push('/')}>Go to Home</button>
        </div>
    );
};

export default Page;
