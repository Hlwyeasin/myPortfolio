// src/components/Container.jsx
import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="max-w-[1320px] sm:max-w-[1024px] md:max-w-[768px] mx-auto  md:ml-[300px]">
      {children}
    </div>
  );
};

export default Container;