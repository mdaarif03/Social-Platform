import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import { 
  noteCreateReducer, 
  noteDeleteReducer, 
  noteListReducer, 
  noteUpdateReducer,
} from "./reducers/notesReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
  userLoginReducers, 
  userRegisterReducer, 
  userUpdateReducer,
} from "./reducers/userReducers";


const reducer = combineReducers({
  // this wil conatin our reducers
  userLogin: userLoginReducers,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: userUpdateReducer,
  noteDelete: noteDeleteReducer,
  userUpdate: noteUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin:{userInfo: userInfoFromStorage},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
