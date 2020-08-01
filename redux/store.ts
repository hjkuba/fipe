import { applyMiddleware, createStore } from 'redux';
import createSageMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import type { MakeStore, Context } from 'next-redux-wrapper';
import type { Middleware, Store } from 'redux';
import type { Task } from 'redux-saga';

import reducer, { State } from './reducer';
import saga from './saga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const makeStore: MakeStore<State> = (context: Context) => {
  const sagaMiddleware = createSageMiddleware();
  const store = <SagaStore>(
    createStore(reducer, bindMiddleware([sagaMiddleware]))
  );
  store.sagaTask = sagaMiddleware.run(saga);
  return store;
};
const wrapper = createWrapper<State>(makeStore, { debug: true });

export default wrapper;
