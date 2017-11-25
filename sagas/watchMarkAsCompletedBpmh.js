import { call, takeLatest, select, put } from 'redux-saga/effects';
import bpmhSources from 'Bpmh/sources/bpmhSources';
import * as notificationTypes from 'Notifications/constants/notificationTypes';
import * as notificationCategories from 'Notifications/constants/notificationCategories';
import * as notificationMessages from 'Notifications/constants/notificationMessages';
import { addNotification } from 'Notifications/modules/notification/notificationState';
import { MARK_AS_COMPLETED_BPMH } from 'Bpmh/constants/actionTypes';

import { saveBpmhRequest, saveBpmhFailure, changeBpmhStatus, enableSaveButton } from 'Bpmh/actions/bpmhActions';
import { medrecAccessToken as medrecAccessTokenSelector, medrecSessionContext as medrecSessionContextSelector }
  from 'lib/common/selectors/auth';
import bpmhSelector from 'Bpmh/lib/selectors/bpmh';
import { bpmhStatusMap } from 'Bpmh/constants/bpmhConstants';

export function* markAsCompletedBpmh() {
  try {
    yield put(saveBpmhRequest());

    const medrecAccessToken = yield select(medrecAccessTokenSelector);
    const medrecSessionContext = yield select(medrecSessionContextSelector);
    const $$bpmh = yield select(bpmhSelector);

    yield call(bpmhSources.markAsComplete, $$bpmh, $$bpmh.get('id'), medrecAccessToken, medrecSessionContext);

    yield put(changeBpmhStatus(bpmhStatusMap.COMPLETED));
    yield put(enableSaveButton());
  } catch (error) {
    const message = notificationMessages.SAVE_BPMH_FAIL;
    const category = notificationCategories.SAVE_BPMH;

    yield put(saveBpmhFailure(error));
    yield put(addNotification(message, notificationTypes.ERROR, category));
  }
}

function* watchMarkAsCompletedBpmh() {
  yield takeLatest(MARK_AS_COMPLETED_BPMH, markAsCompletedBpmh);
}

export default watchMarkAsCompletedBpmh;
