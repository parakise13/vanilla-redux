import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");
    function onChange(e) {
      setText(e.target.value);
    }
    function onSubmit(e) {
      e.preventDefault();
      addToDo(text);
      setText("");
    }
    return (
      <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
          <button>Add</button>
        </form>
        <ul>
          {toDos.map(toDo => (
            <ToDo {...toDo} key={toDo.id} />
          ))}
        </ul>
      </>
    );
}
  

function mapStateToProps(state, ownProps) {
  // 이 함수는 connect에 의해 Home 컴포넌트와 연결되고
  // return 되는 객체는 그 내용물이 어떤 것이든 Home 컴포넌트의 props로 전달된다.
  // 그리고 여기의 state는 우리가 store에서 만들어준 state가 넘어옴
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  // return { dispatch };
  // 이렇게 dispatch를 전달할 수도 있고 하기와 같이 작성도 가능
  return {
    // addToDO라는 이름의 함수를 만드는 것.
    // 이 함수가 실행되면 dispatch를 actioniCreators.addTodo(text)와 함께 호출
    addToDo: (text) => dispatch(add(text)),
  };
}

// connect는 state를 가져오는 함수와 dispatch하는 함수 이 두가지를 인자로 받는다
// 만약 둘 다 필요한 경우라면 하기와 같이 작성
export default connect(mapStateToProps, mapDispatchToProps)(Home);

// 만약 state를 가져오는 함수만 필요한 경우는 하기와 같이 작성하고
// export default connect(mapStateToProps)(Home);

// 만약 dispatch만 필요하다면 null을 넣어줌
// export default connect(null, mapDispatchToProps)(Home);
