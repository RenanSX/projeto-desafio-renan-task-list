import { configureStore, Tuple } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducers from '@/store/reducers/rootReducer'
import rootSaga from '@/store/sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: reducers,
  middleware: () => new Tuple(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store
