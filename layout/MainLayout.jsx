import Navbar from './Navbar';
import Footer from './Footer';
import { DM_Sans, Bebas_Neue } from 'next/font/google';
import localFont from 'next/font/local';

// Defined Font Families
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
});

const humane = localFont({
  src: '../public/fonts/Humane-Bold.woff2',
  variable: '--font-humane',
});

const MainLayout = ({ children }) => {
  return (
    <>
      <main
        className={`${dmSans.variable} ${humane.variable} ${bebasNeue.variable} min-h-screen w-screen bg-black-secondary font-dmSans`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Page */}
        {children}

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default MainLayout;
