'use client';

import { useRef, useState } from 'react';

export default function ProfileCard() {
  const assetBasePath = process.env.NODE_ENV === 'production' ? '/zen.github.io' : '';
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const dragRef = useRef(null);

  function handlePointerDown(event) {
    if (event.button !== 0) return;
    event.preventDefault();
    dragRef.current = { startX: event.clientX, startY: event.clientY };
    cardRef.current?.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (!dragRef.current) return;
    event.preventDefault();
    const deltaX = event.clientX - dragRef.current.startX;
    const deltaY = event.clientY - dragRef.current.startY;
    setRotation({
      x: Math.max(-35, Math.min(35, rotation.x - deltaY * 0.25)),
      y: rotation.y + deltaX * 0.35,
    });
  }

  function handlePointerUp(event) {
    dragRef.current = null;
    try {
      cardRef.current?.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already be released by the browser.
    }
  }

  function resetCard() {
    setRotation({ x: 0, y: 0 });
  }

  return (
    <div className="profile-card-wrapper">
      <div
        ref={cardRef}
        className="profile-card"
        aria-label="Interactive profile card"
        role="button"
        tabIndex={0}
        style={{ '--card-rotate-x': `${rotation.x}deg`, '--card-rotate-y': `${rotation.y}deg` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={resetCard}
        onKeyDown={(event) => event.key === 'Escape' && resetCard()}
      >
        <div className="profile-card__inner">
          <div className="profile-card__face profile-card__face--front">
            <img src={`${assetBasePath}/personalimage.jpeg`} alt="Profile photo of Zen" draggable="false" />
            <span className="card-tag">ZEN / 2026</span>
          </div>
          <div className="profile-card__face profile-card__face--back">
            <div className="profile-back">
              <p>Zen</p>
              <p>Full Stack Developer</p>
              <p>leezexuan4@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="card-hint">Drag to explore · double-click to reset</p>
    </div>
  );
}
