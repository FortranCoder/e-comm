import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Start() {
    return (
        console.log('Start'),
        <>
            <Head>
                <title>Start</title>
            </Head>
            <h1>Start</h1>
            <p>
                <Link href="/about">About</Link>
            </p>
        </>
    );
}