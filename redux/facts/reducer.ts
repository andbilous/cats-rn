import {
  FETCH_FACTS_START,
  FETCH_FACTS_SUCCESS,
  FETCH_FACTS_FAILURE,
  LOAD_MORE_FACTS,
} from "./actionTypes";
import { ActionsTypes } from "../types";

const initialValues = {
  facts: [],
  selectedFacts: [],
  currentIndex: 3,
  isLoading: false,
  error: false,
};

const factsReducer = (state = initialValues, action: ActionsTypes) => {
  switch (action.type) {
    case FETCH_FACTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_FACTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        facts: action.payload,
        selectedFacts: action.payload.slice(0, state.currentIndex),
        currentIndex: state.currentIndex + 3,
      };
    case FETCH_FACTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case FETCH_FACTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case LOAD_MORE_FACTS:
      return {
        ...state,
        isLoading: false,
        selectedFacts: state.facts.slice(0, state.currentIndex),
        currentIndex: state.currentIndex + 3,
        error: true,
      };
    default:
      return state;
  }
};

export default factsReducer;
