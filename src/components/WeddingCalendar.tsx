// // 수정 전 
// // import React from 'react';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';

// // const WeddingCalendar = () => {
// //   const weddingDate = new Date(2025, 7, 23); // 8월은 0부터 시작하므로 7은 8월을 의미합니다.

// //   return (
// //     <div className="calendar-outer">
// //       <div className="calendar-header">8월</div>
// //       <div className="calendar-container">
// //         <Calendar
// //           locale="ko-KR"
// //           value={weddingDate}
// //           formatDay={(locale, date) => date.getDate().toString()}
// //           defaultView="month"
// //           tileClassName={({ date, view }) => {
// //             if (
// //               view === 'month' &&
// //               date.getFullYear() === weddingDate.getFullYear() &&
// //               date.getMonth() === weddingDate.getMonth() &&
// //               date.getDate() === weddingDate.getDate()
// //             ) {
// //               return 'highlight';
// //             }
// //           }}
// //           showNavigation={false}
// //           calendarType="gregory"
// //         />
// //       </div>

// //       <style jsx>{`
// //         .calendar-outer {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           margin: 20px 0;
// //           background-color: #efebe9;
// //         }

// //         :global(.react-calendar__tile) {
// //           aspect-ratio: 1 / 1; /* 정사각형 유지 */
// //           height: auto;
// //           padding: 0.75em 0; /* 내부 정렬 여유 */
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         .calendar-header {
// //           font-size: 20px;
// //           font-weight: bold;
// //           color: #a0522d;
// //           margin-bottom: 10px;
// //           font-family: 'Nanum Myeongjo', serif;
// //         }

// //         :global(.react-calendar__month-view__weekdays) {
// //           display: none;
// //         }

// //         .calendar-container {
// //           display: flex;
// //           justify-content: center;
// //         }

// //         :global(.react-calendar) {
// //           background-color: transparent; /* 원하는 배경색으로 변경 */
// //           border: none;
// //           font-family: 'Nanum Myeongjo', serif;
// //         }

// //         :global(.react-calendar__tile--now) {
// //           background: none;
// //         }

// //         :global(.highlight) {
// //           background: #ff6b6b !important;
// //           color: white !important;
// //           border-radius: 50%;
// //           font-weight: bold;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default WeddingCalendar;

// // 수정 후
// import React from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const WeddingCalendar = () => {
//   const weddingDate = new Date(2025, 7, 23); // 8월은 0부터 시작하므로 7은 8월

//   return (
//     <div className="calendar-outer">
//       <div className="calendar-header">8월</div>
//       <div className="calendar-container">
//         <Calendar
//           locale="ko-KR"
//           value={weddingDate}
//           formatDay={(locale, date) => date.getDate().toString()}
//           defaultView="month"
//           showNavigation={false}
//           calendarType="gregory"
//           tileClassName={({ date, view }) => {
//             if (
//               view === 'month' &&
//               date.getFullYear() === weddingDate.getFullYear() &&
//               date.getMonth() === weddingDate.getMonth() &&
//               date.getDate() === weddingDate.getDate()
//             ) {
//               return 'highlight'; // 여기서 class만 부여
//             }
//             return null;
//           }}
//         />
//       </div>

//       <style jsx>{`
//         .calendar-outer {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           margin: 20px 0;
//           background-color: #efebe9;
//         }

//         .calendar-header {
//           font-size: 16px;
//           font-weight: bold;
//           color: #a0522d;
//           margin-bottom: 10px;
//           font-family: 'Nanum Myeongjo', serif;
//         }

//         .calendar-container {
//           display: flex;
//           justify-content: center;
//           width: 100%;
//           max-width: 240px; /* ✅ 달력 크기 제한 */
//           max-height: 240px; /* ✅ 달력 크기 제한 */
//         }

//         :global(.react-calendar) {
//           background-color: transparent;
//           border: none;
//           font-family: 'Nanum Myeongjo', serif;
//           width: 100%; /* ✅ 상위 컨테이너 크기에 맞춤 */
//         }

//         :global(.react-calendar__month-view__weekdays) {
//           display: none;
//         }

//         :global(.react-calendar__tile) {
//           padding: 0,6em 0;
//           position: relative;
//           z-index: 0;
//         }

//         :global(.react-calendar__tile--now) {
//           background: none !important;
//         }

//         /* ✅ 하이라이트된 날짜에만 적용 */
//         :global(.react-calendar__tile.highlight) {
//           background: none !important;
//         }

//         :global(.react-calendar__tile.highlight abbr) {
//           display: inline-block;
//           background: #ff6b6b;
//           color: white;
//           border-radius: 50%;
//           width: 24px;
//           height: 24px;
//           line-height: 24px;
//           font-size: 0.6rem;
//           font-weight: bold;
//           text-align: center;
//         }

//         /* ✅ 파란 네모 제거 */
//         :global(.react-calendar__tile:focus),
//         :global(.react-calendar__tile:active),
//         :global(.react-calendar__tile:focus-visible) {
//           outline: none !important;
//           box-shadow: none !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WeddingCalendar;

import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const WeddingCalendar = () => {
  const weddingDate = new Date(2025, 7, 23); // 8월은 0부터 시작하므로 7은 8월

  return (
    <div className="calendar-outer">
      <div className="calendar-header">8월</div>
      <div className="calendar-container">
        <Calendar
          locale="ko-KR"
          value={weddingDate}
          formatDay={(locale, date) => date.getDate().toString()}
          defaultView="month"
          showNavigation={false}
          calendarType="gregory"
          onActiveStartDateChange={({ activeStartDate, value, view }) => {
            // 강제로 날짜 고정
            setTimeout(() => {
              document.querySelector('.react-calendar')?.dispatchEvent(
                new CustomEvent('force-reset', { bubbles: true })
              );
            }, 0);
          }}
          activeStartDate={weddingDate}
          tileClassName={({ date, view }) => {
            if (
              view === 'month' &&
              date.getFullYear() === weddingDate.getFullYear() &&
              date.getMonth() === weddingDate.getMonth() &&
              date.getDate() === weddingDate.getDate()
            ) {
              return 'highlight';
            }
            return null;
          }}
        />
      </div>

      <style jsx>{`

        .calendar-outer {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px 0;
          background-color: #efebe9;
        }

        .calendar-header {
          font-size: 16px;
          font-weight: bold;
          color: #a0522d;
          margin-bottom: 10px;
          font-family: 'Nanum Myeongjo', serif;
        }

        .calendar-container {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 300px; /* ✅ 달력 크기 제한 */
          max-height: 300px;
        }

        :global(.react-calendar) {
          background-color: transparent;
          border: none;
          font-family: 'Nanum Myeongjo', serif;
          width: 100%;
        }

        :global(.react-calendar__month-view__weekdays) {
          display: none;
        }

        :global(.react-calendar__tile) {
          padding: 4px 0 !important; /* ✅ tile 여백 줄이기 */
          position: relative;
          z-index: 0;
        }

        :global(.react-calendar__tile abbr) {
          font-size: 0.8rem; /* ✅ 숫자 폰트 크기 줄이기 */
          font-family: 'Nanum Myeongjo', serif;
        }

        :global(.react-calendar__tile--now) {
          background: none !important;
        }

        :global(.react-calendar__tile.highlight) {
          background: none !important;
        }

        :global(.react-calendar__tile.highlight abbr) {
          display: inline-block;
          background: #ff6b6b;
          color: white;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          line-height: 25px;
          font-size: 0.8rem;
          font-weight: bold;
          text-align: center;
        }

        :global(.react-calendar__tile:focus),
        :global(.react-calendar__tile:active),
        :global(.react-calendar__tile:focus-visible) {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default WeddingCalendar;
