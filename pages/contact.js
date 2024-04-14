import PageHeading from '@/components/PageHeading';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className='container mx-auto'>
      {/* Page Heading */}
      <PageHeading heading='CONTACT' />
      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Contact;
