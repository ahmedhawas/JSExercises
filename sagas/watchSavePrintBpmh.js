import { call, takeLatest, select, put, all } from 'redux-saga/effects';
import bpmhSources from 'Bpmh/sources/bpmhSources';
import * as notificationTypes from 'Notifications/constants/notificationTypes';
import * as notificationCategories from 'Notifications/constants/notificationCategories';
import * as notificationMessages from 'Notifications/constants/notificationMessages';
import { addNotification } from 'Notifications/modules/notification/notificationState';
import { SAVE_BPMH, SAVE_AND_PRINT_BPMH } from 'Bpmh/constants/actionTypes';
import { saveBpmhRequest, saveBpmhSuccess, saveBpmhFailure } from 'Bpmh/actions/bpmhActions';
import { medrecAccessToken as medrecAccessTokenSelector, medrecSessionContext as medrecSessionContextSelector }
  from 'lib/common/selectors/auth';
import bpmhSelector from 'Bpmh/lib/selectors/bpmh';

export function* saveBpmh() {
  try {
    yield put(saveBpmhRequest());

    const medrecAccessToken = yield select(medrecAccessTokenSelector);
    const medrecSessionContext = yield select(medrecSessionContextSelector);
    const $$bpmh = yield select(bpmhSelector);

    const sourceAction = $$bpmh.get('id') ? bpmhSources.update : bpmhSources.create;
    const response = yield call(sourceAction, $$bpmh, medrecAccessToken, medrecSessionContext);

    yield put(saveBpmhSuccess(response.data));
  } catch (error) {
    const message = notificationMessages.SAVE_BPMH_FAIL;
    const category = notificationCategories.SAVE_BPMH;

    yield put(saveBpmhFailure(error));
    yield put(addNotification(message, notificationTypes.ERROR, category));
  }
}

export function* saveAndPrintBpmh() {
  yield* saveBpmh();

  const medrecAccessToken = yield select(medrecAccessTokenSelector);
  const medrecSessionContext = yield select(medrecSessionContextSelector);
  const $$bpmh = yield select(bpmhSelector);

  // eslint-disable-next-line
  const path = `/medrec_v2/api/v1/reports/bpmh/${$$bpmh.get('id')}?medrecSessionContext=${medrecSessionContext}&access_token=${medrecAccessToken}`;

  yield call(window.open, path);
}

function* watchSavePrintBpmh() {
  yield all([
    takeLatest(SAVE_BPMH, saveBpmh),
    takeLatest(SAVE_AND_PRINT_BPMH, saveAndPrintBpmh),
  ]);
}

export default watchSavePrintBpmh;
