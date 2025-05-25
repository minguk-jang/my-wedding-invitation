import React from 'react';

interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

const weddingEvent: CalendarEvent = {
  title: '민국 ♥️ 주연 결혼식',
  description: '민국 ♥️ 주연의 결혼식에 초대합니다.',
  location: '아펠가모 반포',
  startDate: new Date('2025-08-23T12:30:00+09:00'),
  endDate: new Date('2025-08-23T15:00:00+09:00'),
};

export default function AddToCalendar() {
  const generateGoogleCalendarUrl = (event: CalendarEvent) => {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.title,
      details: event.description,
      location: event.location,
      dates: `${event.startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/` +
             `${event.endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  };

  const generateIcsFile = (event: CalendarEvent) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DTSTART:${event.startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
      `DTEND:${event.endDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}`,
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
    <div className="flex flex-col items-center gap-4 mt-6">
      <button
        onClick={() => window.open(generateGoogleCalendarUrl(weddingEvent), '_blank')}
        className="bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        Google 캘린더에 추가
      </button>
      <button
        onClick={() => generateIcsFile(weddingEvent)}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        캘린더 파일 다운로드
      </button>
    </div>
  );
} 