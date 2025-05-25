import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'; // ✅ basePath 사용

const WrapperBase = styled('div', {
  background: '#efebe9',
  width: '100%',
  padding: '2rem 1rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 72,
});

const Header = styled('div', {
  fontSize: '1.75rem',
  fontWeight: 'bold',
  color: '#a0522d',
  marginBottom: '10px',
  fontFamily: "'ConconFont, sans-serif'",
});

const CalendarContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '300px',
  maxHeight: '300px',
});

const WeddingCalendar = () => {
  const weddingDate = new Date(2025, 7, 23);
  const { basePath } = useRouter(); // ✅ basePath 가져오기

  return (
    <div
      style={{
        background: '#efebe9',
        backgroundImage: `url(${basePath}/assets/GroovePaper.png)`, // ✅ 경로 수정
        backgroundRepeat: 'repeat',
        width: '100%',
        padding: '2rem 1rem',
        boxSizing: 'border-box',
        paddingBottom: 72,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2 }}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Header>8월</Header>
        <CalendarContainer>
          <Calendar
            locale="ko-KR"
            value={weddingDate}
            formatDay={(locale, date) => date.getDate().toString()}
            defaultView="month"
            showNavigation={false}
            calendarType="gregory"
            activeStartDate={weddingDate}
            onActiveStartDateChange={({ activeStartDate, value, view }) => {
              setTimeout(() => {
                document.querySelector('.react-calendar')?.dispatchEvent(
                  new CustomEvent('force-reset', { bubbles: true })
                );
              }, 0);
            }}
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
        </CalendarContainer>
      </motion.div>

      <style jsx global>{`
        .react-calendar {
          background-color: transparent;
          border: none;
          font-family: 'Nanum Myeongjo', serif;
          width: 100%;
        }

        .react-calendar__month-view__weekdays {
          display: none;
        }

        .react-calendar__tile {
          padding: 4px 0 !important;
          position: relative;
          z-index: 0;
        }

        .react-calendar__tile abbr {
          font-size: 0.8rem;
          font-family: 'Nanum Myeongjo', serif;
          color: #333333 !important; /* 평일 글자색 */
        }

        /* 주말 색상 설정 */
        .react-calendar__month-view__days__day--weekend abbr {
          color: #e41749 !important; /* 주말 글자색 */
        }

        .react-calendar__tile--neighboringMonth abbr {
          color: #bbb !important;
          opacity: 0.1 !important;
        }

        .react-calendar__tile--now {
          background: none !important;
        }

        .react-calendar__tile.highlight {
          background: none !important;
        }

        .react-calendar__tile.highlight abbr {
          display: inline-block;
          background: #ff6b6b;
          color: white !important;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          line-height: 25px;
          font-size: 0.8rem;
          font-weight: bold;
          text-align: center;
        }

        .react-calendar__tile:focus,
        .react-calendar__tile:active,
        .react-calendar__tile:focus-visible {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
};

export default WeddingCalendar;
