'use client';

export default function Loading() {
    return (
        <div className="h-1 w-full absolute top-0 left-0 bg-gray-200">
            <div className="h-1 bg-blue-500 animate-loading"></div>
        </div>
    );
}