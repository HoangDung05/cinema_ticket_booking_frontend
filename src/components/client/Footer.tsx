import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 pt-20 pb-10 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-headline font-bold text-primary mb-6">Lumière</h2>
            <p className="text-on-surface-variant max-w-sm">Experience cinema like never before. Premium seating, immersive sound, and the latest blockbusters.</p>
          </div>
          <div>
            <h3 className="font-headline font-bold text-on-surface mb-6">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">Now Showing</Link>
              <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">Coming Soon</Link>
              <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">Cinemas</Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-bold text-on-surface mb-6">Support</h3>
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">FAQs</Link>
              <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">Contact Us</Link>
              <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-outline-variant/20 text-sm text-on-surface-variant">
          <p>© 2023 Lumière Cinemas. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
