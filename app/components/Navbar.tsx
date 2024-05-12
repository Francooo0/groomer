// components/Navbar.tsx
import { LoginLink, RegisterLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';

export const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full bg-custom-pink-darkest text-white p-4 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-lg">BrandName</h1>
                <div className="flex items-center space-x-4">
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                    {/* Authentication Links */}
                    <LoginLink postLoginRedirectURL="/dashboard">Sign In</LoginLink>
                    <RegisterLink postLoginRedirectURL="/welcome">Sign Up</RegisterLink>
                    <LogoutLink>Log Out</LogoutLink>
                </div>
            </div>
        </nav>
    );
};
