import React from 'react'
import Header from './Header';
import RevoCalendar from 'revo-calendar';
import Footer from './Footer';

const Calendar = () => {
  return (
    <main>
      <div className="calendar">
        <
          RevoCalendar
          style={{
            borderRadius: "5px",
            border: "1.5px solid #4F6995",
          }}
          highlightToday={true}
          lang="en"
          primaryColor="#474C7A"
          secondaryColor="#EBEBEB"
          todayColor="#3B3966"
          textColor="#333333"
          indicatorColor="orange"
          animationSpeed={
            300
          }
          sidebarWidth={
            180
          }
          detailWidth={
            280
          }
          showDetailToggler={
            true
          }
          showSidebarToggler={
            true
          }
          onePanelAtATime={
            false
          }
          allowDeleteEvent={
            true
          }
          allowAddEvent={
            true
          }
          openDetailsOnDateSelection={
            true
          }
          timeFormat24={
            true
          }
          showAllDayLabel={
            false
          }
          detailDateFormat="DD/MM/YYYY"
        />
      </div>
      {/* <div className='calendar-error-resolve'>Calendar is only visible on larger screens!</div> */}
    </main>
  );
}

export default Calendar;