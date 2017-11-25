import { call, takeLatest, select, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import { generateDiffSummary } from 'lib/diffUtilities';

import { medrecAccessToken as medrecAccessTokenSelector, medrecSessionContext as medrecSessionContextSelector }
  from 'lib/common/selectors/auth';
import originalModelSelector from 'lib/common/selectors/originalModel';

import { SAVE_BPMH_SUCCESS } from 'Bpmh/constants/actionTypes';
import { BPMH_AUDIT_LOG_SUCCESS } from 'lib/common/modules/originalModel/originalModelState';


export function* diffBpmh(action) {
  try {
    const $$currentBpmh = fromJS(action.data.bpmh);

    const medrecAccessToken = yield select(medrecAccessTokenSelector);
    const medrecSessionContext = yield select(medrecSessionContextSelector);
    const $$oldBpmh = yield select(originalModelSelector);

    yield call(generateDiffSummary, $$oldBpmh, $$currentBpmh, 'Bpmh', medrecAccessToken, medrecSessionContext);
    yield put({ type: BPMH_AUDIT_LOG_SUCCESS, bpmh: action.data.bpmh });
  } catch (e) {
    yield call(console.log, 'failed to generate BPMH diff', e); // eslint-disable-line
  }
}

export function* watchSaveBpmhSuccess() {
  yield takeLatest(SAVE_BPMH_SUCCESS, diffBpmh);
}

export default watchSaveBpmhSuccess;
