import {Provider, connect} from 'react-redux';
import { Alert } from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

let store = createStore ((state, action)=>{
	if (state == undefined){
		return { allPhotosArr: [
				               {pic: {uri: "https://i.gifer.com/7plQ.gif"},
				                user: {name: '', bio: ''}},
				               {pic: {uri: "https://i.gifer.com/7plQ.gif"},
				                user: {name: '', bio: ''}},
				               {pic: {uri: "https://i.gifer.com/7plQ.gif"},
				                user: {name: '', bio: ''}},
				                {pic: {uri: "https://i.gifer.com/7plQ.gif"},
				                user: {name: '', bio: ''}},
				                {pic: {uri: "https://i.gifer.com/7plQ.gif"},
				                user: {name: '', bio: ''}},
               ],
               error: null
 }
	}
	if (action.type === 'PHOTOS_LOADED'){
		return {...state,
			    allPhotosArr: action.allPhotosArr,
			}
	}
	if (action.type === 'LOADED_ERROR'){
		return {...state,
			    error: action.error,
			}
	}
	return state
}, applyMiddleware(thunk))

store.subscribe(()=> (console.log(store.getState())))



let mapStateToProps = state => {
	return {allPhotosArr: state.allPhotosArr,
	        error: state.error}
}



export {store, mapStateToProps}

