import Head from 'next/head';
import { useEffect } from 'react';

const SEO = ({ seoData = {} }) => {
  const { title, description, keywords, structuredData } = seoData;

  useEffect(() => {
    // Update structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [structuredData]);

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(',')} />
    </Head>
  );
};

export default SEO;
