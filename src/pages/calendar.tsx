import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Calendar() {
  const router = useRouter();

  useEffect(() => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('장민국❤이주연 결혼식')}&dates=20250823T033000Z/20250823T060000Z&details=${encodeURIComponent('장민국❤이주연의 결혼식에 초대합니다.')}&location=${encodeURIComponent('아펠가모 반포')}`;
    
    // 모바일 환경에서는 새 창으로 열기가 차단될 수 있으므로 현재 창에서 이동
    window.location.href = calendarUrl;
  }, []);

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
      textAlign: 'center'
    }}>
      <h1>Google 캘린더로 이동 중입니다...</h1>
      <p>자동으로 이동하지 않는 경우 아래 버튼을 클릭해주세요.</p>
      <button
        onClick={() => window.location.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('장민국❤이주연 결혼식')}&dates=20250823T033000Z/20250823T060000Z&details=${encodeURIComponent('장민국❤이주연의 결혼식에 초대합니다.')}&location=${encodeURIComponent('아펠가모 반포')}`}
        style={{
          background: '#4285f4',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '24px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Google 캘린더로 이동
      </button>
    </div>
  );
} 