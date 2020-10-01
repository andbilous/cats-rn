import React,{useEffect, Dispatch, FunctionComponent,} from 'react';
import { connect } from 'react-redux'
import {fetchFacts,loadMoreFacts} from '../redux/facts/actions';
import { SafeAreaView, Button } from 'react-native';
import List from '../components/List'
import { RootState } from '../redux/store';
import { Action } from 'redux';
import {ActionsTypes} from '../redux/types'

interface Props{
    selectedFacts: object[];
    fetchFacts: ()=>Action<string>;
    loadMoreFacts: ()=>Action<string>;
    isLoading: boolean
}

const ListWrapper:FunctionComponent<Props> = ({selectedFacts,fetchFacts,loadMoreFacts,isLoading}) => {
    useEffect(()=>{
        fetchFacts();
    },[])

    const handleClick = () =>{
        loadMoreFacts()
    }
    return (
        <SafeAreaView>
            <List facts={selectedFacts} isLoading={isLoading}/>
            {!isLoading && (<Button title="Load More" onPress={handleClick}/>)}
        </SafeAreaView>
    )}

const ListContainer = connect(
    (state:RootState) => ({
      selectedFacts: state.factsReducer.selectedFacts,
      isLoading: state.factsReducer.isLoading
    }), (dispatch: Dispatch<ActionsTypes| any>) => ({
        fetchFacts: () => dispatch(fetchFacts()),
        loadMoreFacts: () => dispatch(loadMoreFacts())
    })
  )(ListWrapper)

  export default ListContainer;

