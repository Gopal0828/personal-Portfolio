// // CustomCursor.js
// import React, { useState, useEffect } from 'react';
// import './CustomCursor.css';

// const CustomCursor = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     const followCursor = () => {
//       setCursorPos((prevPos) => ({
//         x: prevPos.x + (mousePos.x - prevPos.x) * 0.1, // Smooth interpolation for X
//         y: prevPos.y + (mousePos.y - prevPos.y) * 0.1, // Smooth interpolation for Y
//       }));
//       requestAnimationFrame(followCursor); // Continuously update the position
//     };

//     followCursor(); // Start the cursor-following loop

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [mousePos]);

//   return (
//     <div
//       className="custom-cursor"
//       style={{
//         left: `${cursorPos.x}px`,
//         top: `${cursorPos.y}px`,
//       }}
//     />
//   );
// };

// export default CustomCursor;
