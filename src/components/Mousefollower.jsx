import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', left: mousePosition.x, top: mousePosition.y }}>
      <div style={{ width: '50px', height: '50px', backgroundColor: 'blue', borderRadius: '50%' }}>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default MouseFollower;
