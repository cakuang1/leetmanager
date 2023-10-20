import { ReactNode } from 'react';
import Footer from './footer';
import Navigation from './navigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      {/* Navigation Component */}
      {/* Main Content */}
      <main className="bg-gray-50">
      <Navigation />
        {children}
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
