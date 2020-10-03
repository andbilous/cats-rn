export const FETCH_FACTS_START: string = "FETCH_FACTS_START";
export const FETCH_FACTS_SUCCESS: string = "FETCH_FACTS_SUCCESS";
export const FETCH_FACTS_FAILURE: string = "FETCH_FACTS_FAILURE";
export const LOAD_MORE_FACTS: string = "LOAD_MORE_FACTS";
import { AnyAction } from 'redux';

export type Fact = {
    fact: string
}

interface FetchFactsStart extends AnyAction {
    type: typeof FETCH_FACTS_START;
}

interface FetchFactsSuccess extends AnyAction {
    type: typeof FETCH_FACTS_SUCCESS;
    payload: Fact[];
}
interface FetchFactsFailure extends AnyAction {
    type: typeof FETCH_FACTS_FAILURE;
    payload: string;
}
interface LoadMoreFacts extends AnyAction {
    type: typeof LOAD_MORE_FACTS;
}

export type FactsActionsTypes =
    FetchFactsStart
    | FetchFactsSuccess
    | FetchFactsFailure
    | LoadMoreFacts;

export interface FactsState {
    facts: Fact[],
    selectedFacts: Fact[],
    currentIndex: number,
    isLoading: boolean,
    error: boolean,
}