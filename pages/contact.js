import PageHeading from '@/components/PageHeading';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import { contactPageSEO } from '@/constants/seo';

const Contact = () => {
  return (
    <>
      <SEO seoData={contactPageSEO} />
      <div className='container mx-auto'>
        {/* Page Heading */}
        <PageHeading heading='CONTACT' />
        {/* Contact Form */}
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
