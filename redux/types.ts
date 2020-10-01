import {
  FETCH_FACTS_START,
  FETCH_FACTS_FAILURE,
  FETCH_FACTS_SUCCESS,
  LOAD_MORE_FACTS,
} from "../redux/facts/actionTypes";

interface FetchFactsStart {
  type: typeof FETCH_FACTS_START;
}

interface FetchFactsSuccess {
  type: typeof FETCH_FACTS_SUCCESS;
  payload: [];
}
interface FetchFactsFailure {
  type: typeof FETCH_FACTS_FAILURE;
  payload: [];
}
interface LoadMoreFacts {
  type: typeof LOAD_MORE_FACTS;
}

export type ActionsTypes =
  | FetchFactsStart
  | FetchFactsSuccess
  | FetchFactsFailure
  | LoadMoreFacts;
