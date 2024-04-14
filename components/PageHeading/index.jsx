const PageHeading = ({ heading = '' }) => {
  return (
    <div className='my-[30px] flex items-center justify-center rounded-[10px] bg-blue-dark py-[10px] md:py-[25px]'>
      <h1 className='font-humane text-[50px] font-bold text-white md:text-[100px] md:leading-[101px]'>
        {heading}
      </h1>
    </div>
  );
};

export default PageHeading;
