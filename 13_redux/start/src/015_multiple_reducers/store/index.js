// import {coufigureStore} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../modules/counter';
// import reducer from './modules/counter';

export default configureStore ({
  reducer: {
    counter: reducer
  }
})
