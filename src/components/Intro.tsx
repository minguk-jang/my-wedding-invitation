import React, { useEffect, useState } from 'react';

const Intro = ({ onFinish }: { onFinish: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 3000); // 3초 후 인트로 종료

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          opacity: 0,
          animation: 'fadeIn 2s forwards',
        }}
      >
        환영합니다
      </h1>
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Intro;
