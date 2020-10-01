import {
  FETCH_FACTS_START,
  FETCH_FACTS_SUCCESS,
  FETCH_FACTS_FAILURE,
  LOAD_MORE_FACTS,
} from "./actionTypes";
import factsAPI from "../../api";
import { Dispatch } from "redux";

export const fetchFacts = () => async (dispatch: Dispatch) => {
  dispatch(fetchFactsStart());
  try {
    const res = await factsAPI.getFacts();
    if (res.data) {
      dispatch(fetchFactsSuccess(res.data));
    } else {
      dispatch(fetchUsersFailure("error"));
    }
  } catch (e) {
    dispatch(fetchUsersFailure("error"));
  }
};

const fetchFactsStart = () => ({
  type: FETCH_FACTS_START,
});

const fetchFactsSuccess = (data: []) => ({
  type: FETCH_FACTS_SUCCESS,
  payload: data,
});

const fetchUsersFailure = (error: string) => ({
  type: FETCH_FACTS_FAILURE,
  payload: error,
});

export const loadMoreFacts = () => ({
  type: LOAD_MORE_FACTS,
});
