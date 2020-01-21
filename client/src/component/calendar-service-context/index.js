import { createContext } from 'react';
import { withCalendarServiceConsumer } from './with-calendar-service-consumer'
import { withCalendarServiceProvider } from './with-calendar-service-provider'

const { Provider, Consumer } = createContext();

const CalendarServiceProvider = withCalendarServiceProvider(Provider);
const CalendarServiceConsumer = withCalendarServiceConsumer(Consumer);

export {
  CalendarServiceProvider,
  CalendarServiceConsumer
}
