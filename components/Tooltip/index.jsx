import React, { useState } from 'react';

const Tooltip = ({ children, title }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='group relative flex flex-col items-center'>
      {children}
      {show && (
        <div className=' absolute bottom-full z-10 mb-2 whitespace-nowrap rounded-md bg-neon-green px-2 py-1 text-xs text-black-secondary'>
          {title}
        </div>
      )}
      <div
        className='absolute inset-0 z-20'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      />
    </div>
  );
};

export default Tooltip;
