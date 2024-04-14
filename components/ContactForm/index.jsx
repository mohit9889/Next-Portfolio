const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='container mx-auto mb-[30px] flex flex-col rounded-[20px] bg-neon-green p-[20px] text-black-trinary md:flex-row md:p-[55px]'>
      <div className='flex max-w-[100%] flex-col  md:max-w-[40%]'>
        <h1 className='font-humane text-[100px] font-bold leading-[100px] md:text-[141px] md:leading-[124px]'>
          Get in Touch
        </h1>
        <span className='text-[20px] leading-[25px] md:text-[24px] md:leading-[32px]'>
          If you are interested in my work or want to provide feedback about
          this website, I am open to exchanging ideas .
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className='mt-4 flex max-w-[100%] flex-1 flex-col items-end md:mt-0 md:max-w-[60%]'
      >
        <div className='mb-[14px] flex w-[100%] flex-col md:w-[70%]'>
          <label
            className='mb-[5px] text-[20px] font-bold leading-[32px] md:text-[25px]'
            htmlFor='name'
          >
            Name
          </label>
          <input
            className='focus:border-transparent h-[50px] rounded-[10px] p-[5px] focus:outline-none focus:ring-2 focus:ring-black-trinary'
            type='text'
            name='name'
            required
          />
        </div>
        <div className='mb-[14px] flex w-[100%] flex-col md:w-[70%]'>
          <label
            className='mb-[5px] text-[20px] font-bold leading-[32px] md:text-[25px]'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='focus:border-transparent h-[50px] rounded-[10px] p-[5px] focus:outline-none focus:ring-2 focus:ring-black-trinary'
            type='email'
            name='email'
            required
          />
        </div>
        <div className='mb-[14px] flex w-[100%] flex-col md:w-[70%]'>
          <label
            className='mb-[5px] text-[20px] font-bold leading-[32px] md:text-[25px]'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className=' focus:border-transparent rounded-[10px] p-[5px] focus:outline-none focus:ring-2 focus:ring-black-trinary'
            name='message'
            id=''
            rows='5'
          ></textarea>
        </div>
        <button
          className=' h-[50px] w-[100%] rounded-[10px] bg-black-trinary text-[20px] font-medium leading-[32px] text-neon-green md:w-[70%] md:text-[25px]'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
