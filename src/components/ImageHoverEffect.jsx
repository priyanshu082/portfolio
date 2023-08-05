import React, { useState } from 'react';

const ImageHoverEffect = ({src}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imgStyle = {
    width: isHovered ? "400px" : '300px', // Increase width on hover
    height: 'auto',
    transition: 'width 0.3s ease',
  };

  return (
    <div className="image-container">
      <img
        src={src} // Replace with the actual image URL
        alt="Hover Effect Image"
        style={imgStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default ImageHoverEffect;
