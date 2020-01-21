import React from 'react';
import { ToolbarMonth } from '../../../../component/hoc-helpers';
import ScheduleForMonth from '../../components/schedule-for-month/schedule-for-month';
import { ContentContainer } from '../../../../component/content-container/content-container';

export const MonthPage =() => (
  <>
    <ToolbarMonth />
    <ContentContainer>
      <ScheduleForMonth />
    </ContentContainer>
  </>
);
