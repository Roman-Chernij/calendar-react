import React from 'react';
import { ToolbarYear } from '../../../../component/hoc-helpers';
import ScheduleForYear from '../../components/schedule-for-year/schedule-for-year';
import { ContentContainer } from '../../../../component/content-container/content-container';

export const YearPage = () => (
  <>
    <ToolbarYear />
    <ContentContainer>
      <ScheduleForYear />
    </ContentContainer>
  </>
);
