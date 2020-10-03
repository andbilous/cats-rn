import React, { useEffect, Dispatch, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFacts, loadMoreFacts } from '../redux/facts/actions';
import { SafeAreaView, Button, Text, Alert } from 'react-native';
import List from '../components/List';
import { RootState } from '../redux/store';
import { Action } from 'redux';
import {Fact} from '../redux/facts/types'

interface Props {
    selectedFacts: Fact[];
    fetchFacts: () => Action<string>;
    loadMoreFacts: () => Action<string>;
    isLoading: boolean;
    error: string | undefined;
}

const ListWrapper: FunctionComponent<Props> = ({
    selectedFacts,
    fetchFacts,
    loadMoreFacts,
    isLoading,
    error
}) => {
    useEffect(() => {
        fetchFacts();
    }, []);

    const handleClick = () => {
        loadMoreFacts();
    };
    return (
        <SafeAreaView>
            <List facts={selectedFacts} isLoading={isLoading} />
            {!isLoading && <Button title="Load More" onPress={handleClick} />}
            {error && <Text>{error}</Text>}
        </SafeAreaView>
    );
};

const ConnectedListWrapper = connect(
    (state: RootState) => ({
        selectedFacts: state.factsReducer.selectedFacts,
        isLoading: state.factsReducer.isLoading,
        error: state.factsReducer.error
    }),
    (dispatch: Dispatch<Action | any>) => ({
        fetchFacts: () => dispatch(fetchFacts()),
        loadMoreFacts: () => dispatch(loadMoreFacts())
    })
)(ListWrapper as any);

export default ConnectedListWrapper;
