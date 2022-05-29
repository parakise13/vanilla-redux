// import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

// 그냥 redux를 사용하는 경우
// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//     return {
//         type: ADD,
//         text,
//     };
// };

// const deleteToDo = (id) => {
//     return {
//         type: DELETE,
//         id: parseInt(id),
//     };
// };
// ------------------------------------

// reduxtoolkit 사용 - createSlice 사용전
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");
// ------------------------------------

// 그냥 redux를 사용하는 경우
// const reducer = (state = [], action) => {
//     switch (action.type) {
//         // case ADD:
//         case addToDo.type:
//             // return [{ text: action.text, id: Date.now() }, ...state];
//             // payload는 redux toolkit의 관행같은 것이고 액션에 보내고싶어하는 정보가
//             // 무엇이던지 payload와 함께 보내진다
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         // case DELETE:
//         case deleteToDo.type:
//             // return state.filter((toDo) => toDo.id !== action.id);
//             return state.filter((toDo) => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };
// ------------------------------------

// reduxtoolkit 사용 - createSlice 사용전
// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteToDo]: (state, action) =>
//         state.filter((toDo) => toDo.id !== action.payload),
// });

// addToDo에서는 return을 하지않았는데 deleteToDo에서는 return을 한 이유
// createReducer에서 작업할때 두 가지 선택지가 있음
// 새로운 state를 return 하는 것과 state를 mutate하는 것인데
// redux-toolkit의 작동방식이 정보를 가져가서 return으로 새로운 state를 리턴하지 않아도
// 알아서 기존의 state를 mutate하지 않고 새로운 state를 return하기 때문
// addToDo같은 경우는 새로운 state를 return 하는 것이 아니라 push 하는것이기 때문에
// redux-toolkit이 기존의 state를 변경하는 push 같은건 알아서 새로운 state로 retrn 하는데
// 그걸 굳이 return하려고하면 오류발생. filter같은 경우는 원래가 새로운 배열을 return 하는거라
// return을 해줘야함
// ------------------------------------

// 그냥 redux를 사용하는 경우
// const store = createStore(reducer);
// ------------------------------------

// reduxtoolkit 사용 - createSlice 사용 후
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// ------------------------------------

// reduxtoolkit 사용
// const store = configureStore({ reducer: toDos.reducer });
// configureStore를 사용하면 Redux Developer Tools를 사용할수있음
// ------------------------------------

// reduxtoolkit 사용 - createSlice 사용전
// export const actionCreators = {
//     addToDo,
//     deleteToDo,
// };
// ------------------------------------

// reduxtoolkit 사용 - createSlice 사용후
export const { add, remove } = toDos.actions;
// ------------------------------------

export default configureStore({ reducer: toDos.reducer });
