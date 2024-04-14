import '@/styles/global.scss';
import MainLayout from '@/layout/MainLayout';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
