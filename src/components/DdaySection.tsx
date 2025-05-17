// // import React, { useEffect, useState } from 'react';
// // import { styled } from '@stitches/react';

// // interface TimeLeft {
// //   days: number;
// //   hours: number;
// //   minutes: number;
// //   seconds: number;
// // }

// // const Wrapper = styled('div', {
// //   background: '#efebe9',
// //   backgroundImage: 'url(./assets/GroovePaper.png)',
// //   width: '100%',
// // //   padding: '20px 50px', // 위쪽 여백 줄임
// //   textAlign: 'center',
// //   fontFamily: "'Noto Serif KR', serif",
// // });

// // const Title = styled('p', {
// //   fontSize: '20px',
// //   color: '#8b4513',
// //   marginBottom: '20px',
// // });

// // const Timer = styled('div', {
// //   display: 'flex',
// //   justifyContent: 'center',
// //   gap: '16px',

// //   '@media (max-width: 480px)': {
// //     gap: '12px',
// //   },
// // });

// // const Unit = styled('div', {
// //   display: 'flex',
// //   flexDirection: 'column',
// //   alignItems: 'center',
// // });

// // const Circle = styled('div', {
// //   width: '64px',
// //   height: '64px',
// //   borderRadius: '50%',
// //   backgroundColor: 'white',
// //   border: '2px solid #deb887',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   fontSize: '24px',
// //   fontWeight: 'bold',
// //   color: '#a0522d',
// //   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',

// //   '@media (max-width: 480px)': {
// //     width: '52px',
// //     height: '52px',
// //     fontSize: '18px',
// //   },
// // });

// // const Label = styled('span', {
// //   marginTop: '8px',
// //   fontSize: '14px',
// //   color: '#8b4513',

// //   '@media (max-width: 480px)': {
// //     fontSize: '12px',
// //   },
// // });

// // const DdaySection: React.FC<{ weddingDate: Date }> = ({ weddingDate }) => {
// //   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
// //     days: 0,
// //     hours: 0,
// //     minutes: 0,
// //     seconds: 0,
// //   });

// //   useEffect(() => {
// //     const updateTime = () => {
// //       const now = new Date();
// //       const difference = weddingDate.getTime() - now.getTime();

// //       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
// //       const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
// //       const minutes = Math.floor((difference / (1000 * 60)) % 60);
// //       const seconds = Math.floor((difference / 1000) % 60);

// //       setTimeLeft({
// //         days: days >= 0 ? days : 0,
// //         hours: hours >= 0 ? hours : 0,
// //         minutes: minutes >= 0 ? minutes : 0,
// //         seconds: seconds >= 0 ? seconds : 0,
// //       });
// //     };

// //     updateTime();
// //     const timer = setInterval(updateTime, 1000);
// //     return () => clearInterval(timer);
// //   }, [weddingDate]);

// //   return (
// //     <Wrapper>
// //       <Title>민국 & 주연의 결혼식까지</Title>
// //       <Timer>
// //         {[
// //           { label: 'Days', value: timeLeft.days },
// //           { label: 'Hours', value: timeLeft.hours },
// //           { label: 'Minutes', value: timeLeft.minutes },
// //           { label: 'Seconds', value: timeLeft.seconds },
// //         ].map(({ label, value }) => (
// //           <Unit key={label}>
// //             <Circle>{value.toString().padStart(2, '0')}</Circle>
// //             <Label>{label}</Label>
// //           </Unit>
// //         ))}
// //       </Timer>
// //     </Wrapper>
// //   );
// // };


// // export default DdaySection;
// import React, { useEffect, useState } from 'react';
// import { styled } from '@stitches/react';
// import { motion } from 'framer-motion';

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const Wrapper = styled('div', {
//   background: '#efebe9',
//   backgroundImage: 'url(./assets/GroovePaper.png)',
//   width: '100%',
//   padding: '2rem 1rem',
//   boxSizing: 'border-box',
//   textAlign: 'center',
//   fontFamily: "'Noto Serif KR', serif",
//   paddingBottom: 72,
// });

// const Title = styled('p', {
//   fontSize: '1.75rem',
//   color: '#8b4513',
//   marginBottom: '20px',
//   letterSpacing: "0.03em",  // ✅ 자간 줄임
// });

// const Timer = styled('div', {
//   display: 'flex',
//   justifyContent: 'center',
//   gap: '30px',

//   '@media (max-width: 480px)': {
//     gap: '12px',
//   },
// });

// const Unit = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
// });

// const Circle = styled('div', {
//   width: '64px',
//   height: '64px',
//   borderRadius: '50%',
//   backgroundColor: 'white',
//   // border: '2px solid #deb887',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize: '1.125rem',
//   // fontWeight: 'bold',
//   color: '#4F4F4F', //'#a0522d',
//   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',

//   '@media (max-width: 480px)': {
//     width: '52px',
//     height: '52px',
//     fontSize: '1.125rem',
//   },
// });

// const Label = styled('span', {
//   marginTop: '8px',
//   fontSize: '1.125rem',
//   color: '#8b4513',

//   '@media (max-width: 480px)': {
//     fontSize: '1.125rem',
//   },
// });

// const DdaySection: React.FC<{ weddingDate: Date }> = ({ weddingDate }) => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const difference = weddingDate.getTime() - now.getTime();

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((difference / (1000 * 60)) % 60);
//       const seconds = Math.floor((difference / 1000) % 60);

//       setTimeLeft({
//         days: days >= 0 ? days : 0,
//         hours: hours >= 0 ? hours : 0,
//         minutes: minutes >= 0 ? minutes : 0,
//         seconds: seconds >= 0 ? seconds : 0,
//       });
//     };

//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, [weddingDate]);

//   return (
//     <Wrapper>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 1.2 }}
//         style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//       >
//         <Title>민국과 주연의 결혼식까지</Title>
//         <Timer>
//           {[
//             { label: 'Days', value: timeLeft.days },
//             { label: 'Hours', value: timeLeft.hours },
//             { label: 'Minutes', value: timeLeft.minutes },
//             { label: 'Seconds', value: timeLeft.seconds },
//           ].map(({ label, value }) => (
//             <Unit key={label}>
//               <Circle>{value.toString().padStart(2, '0')}</Circle>
//               <Label>{label}</Label>
//             </Unit>
//           ))}
//         </Timer>
//       </motion.div>
//     </Wrapper>
//   );
// };

// export default DdaySection;

// import React, { useEffect, useState } from 'react';
// import { styled } from '@stitches/react';
// import { motion } from 'framer-motion';
// import { useRouter } from 'next/router'; // ✅ basePath 사용

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const Title = styled('p', {
//   fontSize: '1.75rem',
//   color: '#8b4513',
//   marginBottom: '20px',
//   letterSpacing: '0.03em',
// });

// const Timer = styled('div', {
//   display: 'flex',
//   justifyContent: 'center',
//   gap: '30px',

//   '@media (max-width: 480px)': {
//     gap: '12px',
//   },
// });

// const Unit = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
// });

// const Circle = styled('div', {
//   width: '64px',
//   height: '64px',
//   borderRadius: '50%',
//   backgroundColor: 'white',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize: '1.125rem',
//   color: '#4F4F4F',
//   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',

//   '@media (max-width: 480px)': {
//     width: '52px',
//     height: '52px',
//     fontSize: '1.125rem',
//   },
// });

// const Label = styled('span', {
//   marginTop: '8px',
//   fontSize: '1.125rem',
//   color: '#8b4513',

//   '@media (max-width: 480px)': {
//     fontSize: '1.125rem',
//   },
// });

// const DdaySection: React.FC<{ weddingDate: Date }> = ({ weddingDate }) => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   const { basePath } = useRouter(); // ✅ basePath 가져오기

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       const difference = weddingDate.getTime() - now.getTime();

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((difference / (1000 * 60)) % 60);
//       const seconds = Math.floor((difference / 1000) % 60);

//       setTimeLeft({
//         days: days >= 0 ? days : 0,
//         hours: hours >= 0 ? hours : 0,
//         minutes: minutes >= 0 ? minutes : 0,
//         seconds: seconds >= 0 ? seconds : 0,
//       });
//     };

//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, [weddingDate]);

//   return (
//     <div
//       style={{
//         background: '#efebe9',
//         backgroundImage: `url(${basePath}/assets/GroovePaper.png)`, // ✅ basePath 적용
//         backgroundRepeat: 'repeat',
//         width: '100%',
//         padding: '2rem 1rem',
//         boxSizing: 'border-box',
//         textAlign: 'center',
//         fontFamily: "'Noto Serif KR', serif",
//         paddingBottom: 72,
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 1.2 }}
//         style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
//       >
//         <Title>민국과 주연의 결혼식까지</Title>
//         <Timer>
//           {[
//             { label: 'Days', value: timeLeft.days },
//             { label: 'Hours', value: timeLeft.hours },
//             { label: 'Minutes', value: timeLeft.minutes },
//             { label: 'Seconds', value: timeLeft.seconds },
//           ].map(({ label, value }) => (
//             <Unit key={label}>
//               <Circle>{value.toString().padStart(2, '0')}</Circle>
//               <Label>{label}</Label>
//             </Unit>
//           ))}
//         </Timer>
//       </motion.div>
//     </div>
//   );
// };

// export default DdaySection;

import React, { useEffect, useState } from 'react';
import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'; // ✅ basePath 사용

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Title = styled('p', {
  fontSize: '1.75rem',
  color: '#8b4513',
  marginBottom: '20px',
  letterSpacing: '0.03em',
});

const Timer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',

  '@media (max-width: 480px)': {
    gap: '12px',
  },
});

const Unit = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Circle = styled('div', {
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.125rem',
  color: '#4F4F4F',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',

  '@media (max-width: 480px)': {
    width: '52px',
    height: '52px',
    fontSize: '1.125rem',
  },
});

const Label = styled('span', {
  marginTop: '8px',
  fontSize: '1.125rem',
  color: '#8b4513',

  '@media (max-width: 480px)': {
    fontSize: '1.125rem',
  },
});

const DdaySection: React.FC<{ weddingDate: Date }> = ({ weddingDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { basePath } = useRouter(); // ✅ basePath 가져오기

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: days >= 0 ? days : 0,
        hours: hours >= 0 ? hours : 0,
        minutes: minutes >= 0 ? minutes : 0,
        seconds: seconds >= 0 ? seconds : 0,
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div
      style={{
        background: '#efebe9',
        backgroundImage: `url(${basePath}/assets/GroovePaper.png)`, // ✅ basePath 적용
        backgroundRepeat: 'repeat',
        width: '100%',
        padding: '2rem 1rem',
        boxSizing: 'border-box',
        textAlign: 'center',
        fontFamily: "'Noto Serif KR', serif",
        paddingBottom: 72,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Title>민국과 주연의 결혼식까지</Title>
        <Timer>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map(({ label, value }) => (
            <Unit key={label}>
              <Circle>{value.toString().padStart(2, '0')}</Circle>
              <Label>{label}</Label>
            </Unit>
          ))}
        </Timer>
      </motion.div>
    </div>
  );
};

export default DdaySection;
