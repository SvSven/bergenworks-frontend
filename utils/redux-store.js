import { createStore } from "redux";

const initialStoreState = {
  menus: undefined
};

const actionTypes = {
  SET_MENUS: "SET_MENUS",
  SET_GLOBAL_INFO: "SET_GLOBAL_INFO"
};

const reducer = (state = initialStoreState, action) => {
  switch (action.type) {
    case actionTypes.SET_MENUS:
      return Object.assign({}, state, {
        menus: action.data
      });
    case actionTypes.SET_GLOBAL_INFO:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

export const storeActions = {
  setMenus: data => {
    return { type: actionTypes.SET_MENUS, data: data };
  },
  setGlobalInfo: data => {
    return { type: actionTypes.SET_GLOBAL_INFO, data: data };
  }
};

export function initializeStore(initialState = initialStoreState) {
  return createStore(reducer, initialState);
}
