// components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-custom-pink-lightest text-custom-pink-darkest p-4">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-center text-sm font-light">
                    © {new Date().getFullYear()} BrandName. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
