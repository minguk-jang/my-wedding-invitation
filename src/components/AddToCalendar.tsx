import React from 'react';
import { Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';

export default function AddToCalendar() {
  const generateIcsFile = () => {
    const event = {
      title: '장민국❤이주연 결혼식',
      description: '장민국❤이주연의 결혼식에 초대합니다.',
      location: '아펠가모 반포',
      startTime: '20250823T123000',
      endTime: '20250823T150000',
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DTSTART;TZID=Asia/Seoul:${event.startTime}`,
      `DTEND;TZID=Asia/Seoul:${event.endTime}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '민국_주연_결혼식.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex justify-center mt-8 mb-8">
      <Button
        type="primary"
        size="large"
        icon={<CalendarOutlined />}
        onClick={generateIcsFile}
        className="bg-rose-500 hover:bg-rose-600"
        style={{
          height: '48px',
          padding: '0 24px',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        캘린더에 일정 추가하기
      </Button>
    </div>
  );
} 