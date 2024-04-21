import React, { useState, useEffect } from "react";

const Card = ({ imageUrl, index, onDismiss }) => {
  const [startPoint, setStartPoint] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const card = document.querySelector(`div[data-index="${index}"]`);
    card.style.setProperty("--i", index);
  }, [index]);

  const handleMouseDown = (e) => {
    setStartPoint({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!startPoint) return;
    setOffsetX(e.clientX - startPoint.x);
    setOffsetY(e.clientY - startPoint.y);
  };

  const handleMouseUp = () => {
    if (!startPoint) return;
    const dx = offsetX;
    const dy = offsetY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    if (distance > 50) {
      const isRightSwipe = angle >= -45 && angle < 45;
      const isLeftSwipe = angle >= 135 || angle < -135;

      if (isRightSwipe || isLeftSwipe) {
        onDismiss();
      }
    }

    setStartPoint(null);
    setOffsetX(0);
    setOffsetY(0);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="card"
      data-index={index}
      onMouseDown={handleMouseDown}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px) rotate(${
          offsetX * 0.1
        }deg)`,
      }}
    >
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default Card;
