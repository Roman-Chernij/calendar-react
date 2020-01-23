import { createContext } from 'react';
import { WithAuthServiceProvider } from './with-auth-service-provider'
import { WithAuthServiceConsumer } from './with-auth-service-consumer'

const {
  Provider,
  Consumer } = createContext();

const AuthServiceProvider = WithAuthServiceProvider(Provider);
const AuthServiceConsumer = WithAuthServiceConsumer(Consumer);

export {
  AuthServiceProvider,
  AuthServiceConsumer };
