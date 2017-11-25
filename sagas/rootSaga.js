import { all } from 'redux-saga/effects';
import { watchSaveBpmhSuccess } from './diffBpmh';
import watchSavePrintBpmh from './watchSavePrintBpmh';
import watchMarkAsCompletedBpmh from './watchMarkAsCompletedBpmh';

export default function* rootSaga() {
  yield all([
    watchSaveBpmhSuccess(),
    watchMarkAsCompletedBpmh(),
    watchSavePrintBpmh(),
  ]);
}
