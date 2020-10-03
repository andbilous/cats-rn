import {
  FETCH_FACTS_START,
  FETCH_FACTS_SUCCESS,
  FETCH_FACTS_FAILURE,
  LOAD_MORE_FACTS,
  FactsActionsTypes,
  Fact
} from "./types";
import factsAPI from "../../api";
import { Dispatch } from "redux";

export const fetchFacts = () => async (dispatch: Dispatch) => {
  dispatch(fetchFactsStart());
  try {
    const res = await factsAPI.getFacts();
    dispatch(fetchFactsSuccess(res.data));
  } catch (error) {
    dispatch(fetchFactsFailure(error));
  }
};

const fetchFactsStart = (): FactsActionsTypes => ({
  type: FETCH_FACTS_START,
});

const fetchFactsSuccess = (data: Fact[]): FactsActionsTypes => ({
  type: FETCH_FACTS_SUCCESS,
  payload: data,
});

const fetchFactsFailure = (error: string): FactsActionsTypes => ({
  type: FETCH_FACTS_FAILURE,
  payload: error,
});

export const loadMoreFacts = (): FactsActionsTypes => ({
  type: LOAD_MORE_FACTS,
});
