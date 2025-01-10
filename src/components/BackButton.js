'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();
    return (
        <aside className="my-4">
            <button onClick={() => router.back()} className="text-base font-semibold hover:text-white transition">
                <span aria-hidden="true">&#128072; Back</span>
            </button>
        </aside>
    )
}