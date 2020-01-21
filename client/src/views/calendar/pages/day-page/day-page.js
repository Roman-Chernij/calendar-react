import React from 'react';
import { ToolbarDay } from '../../../../component/hoc-helpers';
import ScheduleForDay from '../../components/schedule-for-day/schedule-for-day';

export const DayPage = () => {

  return (
    <>
      <ToolbarDay />
      <ScheduleForDay />
    </>
  )
};
