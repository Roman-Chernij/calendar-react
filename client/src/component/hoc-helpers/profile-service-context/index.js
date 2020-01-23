import { createContext } from 'react';
import { withProfileServiceProvider } from './with-profile-service-provider'
import { withProfileServiceConsumer } from './with-profile-service-consumer'

const { Provider, Consumer } = createContext();

const ProfileServiceProvider = withProfileServiceProvider(Provider);
const ProfileServiceConsumer = withProfileServiceConsumer(Consumer);

export {
  ProfileServiceProvider,
  ProfileServiceConsumer
}
