import React from "react";
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import fetchPreview from "../utils/fetchPreview";

const actionTypes = {
  FETCH_DATA: 'FETCH_DATA',
  SET_DATA: 'SET_DATA',
  SET_ERROR: 'SET_ERROR',
};

function previewReducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SET_DATA":
      return {
        loading: false,
        data: action.payload,
        error: null,
      };
    case "SET_ERROR":
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      throw new Error(`Unknown action type ${action.type}`)
  }
}

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const fetchPreviewDebounced = AwesomeDebouncePromise(fetchPreview, 800);

const useLinkPreview = () => {
  const [query, setQuery] = React.useState('https://github.com/deepak-chandani');
  const [state, dispatch] = React.useReducer(previewReducer, initialState)

  React.useEffect(() => {
    dispatch({type: actionTypes.FETCH_DATA})
    fetchPreviewDebounced(query)
      .then((response) => {
        dispatch({type: actionTypes.SET_DATA, payload: response})
      })
      .catch(error => {
        dispatch({type: actionTypes.SET_ERROR, payload: error})
      });
  }, [query]);

  const handleSearch = React.useCallback((text) => {
    const regex = new RegExp("(http|https)://([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?")

    const results = text.match(regex);
    if(results && results.length){
      setQuery(results[0]);
    }else{
      dispatch({type: actionTypes.SET_DATA, payload: null})
    }
  }, [setQuery])

  return [state, handleSearch]
};

export default useLinkPreview;
