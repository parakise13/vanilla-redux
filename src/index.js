import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



// vanilla JS를 위한 Redux
// import { createStore } from "redux";
// store는 나의 data를 넣는 곳. data라고 하면 관리해야할 state이고 state는 내 application에서 변경되는 data를 말함. 여기서 변경되는 값은 count이며 handleAdd건 handleMinus건 모두 count를 바꾸기위한 함수임
// 리덕스에는 createStore라는 함수가 있고 기본적으로 data를 넣을 수 있는 장소를 생성한다.

// ************************* 리덕스 기본 *************************
// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");
// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS"

// const countModifier = (count = 0, action ) => {
//   // countModifier는 reducer고 data를 바꿔주는 역할을 하는데 항상 application의 data를 return 해줘야함.
//   // 파라미터로 전달해주는 state(여기서는 count)는 바로 초기화를 할 수 있음
//   // action은 redux에서 function을 부를때 쓰는 두번째 파라미터이자 countModifier와 소통하여 state를 변경하기 위한 방법
//   // countModifier에 action을 보내는건 countStore에서 dispatch로 가능하다.

//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }

// }
// const countStore = createStore(countModifier);
// // createStore는 기본적으로 reducer를 요구하고 reducer는 function이어야함
// // 그리고 그 reducer는 data를 modify함. 여기서는 count를 increase하고 decrease하는 역할

// const onChange = () => {
//   number.innerText = countStore.getState();
// }

// countStore.subscribe(onChange);
// // subscribe는 우리에게 store안에 있는 변화들을 알 수 있게 해준다.
// // 그래서 변화가 있을때마다 감지해서 onChange를 호출함.

// // 하기와 같이 dispatch로 전달되는 action는 무조건 object여야하고 type이 꼭 필요함.
// const handleAdd = () => {
//   countStore.dispatch({type: ADD})
// }

// const handleMinus = () => {
//   countStore.dispatch({type: MINUS})
// }

// add.addEventListener("click", handleAdd );
// minus.addEventListener("click", handleMinus);

// vanilla-JS로만 상태를 변경하던 식
// let count = 0;
// number.innerText = count;

// // html에 count를 업데이트하라고 알려주기 위함
// const updateText = () => {
//     number.innerText = count;
// };

// const handleAdd = () => {
//     count = count + 1;
//     updateText();
// };

// const handleMinus = () => {
//     count = count - 1;
//     updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
// ************************* 리덕스 기본 *************************

// // ************************* todo list *************************
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
//     return { type: ADD_TODO, text };
// };

// const deleteToDo = (id) => {
//     return { type: DELETE_TODO, id };
// };

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             const newToDoObj = { text: action.text, id: Date.now() };
//             return [newToDoObj, ...state];
//         // 리덕스에서 가장 중요한 점은 절.대 기존의 state를 변경하면 안되고 새로운 obj를 return 해야함.
//         case DELETE_TODO:
//             const cleaned = state.filter((toDos) => toDos.id !== action.id);
//             return cleaned;
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// const dispatchAddToDo = (text) => {
//     store.dispatch(addToDo(text));
// };

// const dispathDeleteToDo = (e) => {
//     const id = parseInt(e.target.parentNode.id);
//     store.dispatch(deleteToDo(id));
// };

// const paintToDos = () => {
//     const toDos = store.getState();
//     ul.innerHTML = "";
//     toDos.forEach((toDo) => {
//         const li = document.createElement("li");
//         const btn = document.createElement("button");
//         btn.innerText = "DEL";
//         btn.addEventListener("click", dispathDeleteToDo);
//         li.id = toDo.id;
//         li.innerText = toDo.text;
//         li.appendChild(btn);
//         ul.appendChild(li);
//     });
// };
// store.subscribe(paintToDos);

// // const createToDo = toDo => {
// //   const li = document.createElement("li");
// //   li.innerText = toDo;
// //   ul.appendChild(li);
// // }

// const onSubmit = (e) => {
//     e.preventDefault();
//     const toDo = input.value;
//     input.value = "";
//     // createToDo(toDo);
//     dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);

// // ************************* todo list *************************
