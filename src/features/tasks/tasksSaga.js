import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExmapleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (console) {
    yield call(alert, "coś poszło nie tak!");
  }
}

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExmapleTasks.type, fetchExampleTasksHandler);
}
