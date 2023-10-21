import { ReactNode } from 'react';
import Footer from './footer';
import Navigation from './navigation';

export default function Layout({ children, showFooter = true }: { children: ReactNode; showFooter?: boolean }) {
  return (
    <div className="">
      {/* Navigation Component */}
      {/* Main Content */}
      <main className="bg-gray-50 ">
        <Navigation />
        {children}
      </main>
      {/* Conditional Rendering of Footer */}
      {showFooter && <Footer />}
    </div>
  );
}

