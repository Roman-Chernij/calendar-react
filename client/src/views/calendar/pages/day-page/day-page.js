import React from 'react';
import { ToolbarDay } from '../../../../component/hoc-helpers';
import ScheduleForDay from '../../components/schedule-for-day/schedule-for-day';
import { ContentContainer } from '../../../../component/content-container/content-container';

export const DayPage = () => {

  return (
    <>
      <ToolbarDay />
      <ContentContainer>
        <ScheduleForDay />
      </ContentContainer>
    </>
  )
};
