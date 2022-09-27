import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      {/* prestyled header component */}
      <Header category="App" title="Calendar"/>
      {/* syncfusion calendar component, gets passed data and an old date to show agenda functionality */}
      <ScheduleComponent
      height="650px"
      eventSettings={{ dataSource: scheduleData}}
      selectedDate={new Date(2021, 0, 10)}
      >
        {/* services includes ability to view different calendar views, edit, delete, drag and drop dates, resize to shange times, etc. does not have database */}
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar
