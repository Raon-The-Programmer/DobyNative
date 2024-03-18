import 'react-native-gesture-handler';
import { Provider, useSelector } from 'react-redux';
import store, { persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import InApp from './InApp';


export default function App() {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor} loading={null}>
   <InApp/>
   </PersistGate>
    </Provider>
  );
}

