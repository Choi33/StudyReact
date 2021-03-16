import React, { useState, useEffect } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

function App() {
  // const [xxx, setXxx] = useState(initialValue);
  console.log("App 함수가 실행됐습니다.");
  localStorage.getItem("todos");
  const [todos, setTodos] = useState([]);

  useEffect(() => {}, []);

  // const handleCreate = () => {
  //   // this.setState({input: '어쩌구'}); // 클래스형 컴포넌트
  //   // Object.assign({input:'입력', money: 5000}, {money: 1000}); // => {input: '입력' , money: 1000}
  //   // this.setState({
  //   //   input:'',
  //   //   todos:todos.concat({
  //   //     id:this.id++,
  //   //     text:input,
  //   //     checked:false
  //   //   })
  //   // });
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat({
  //       id: prevTodos.length === 0 ? 0 : prevTodos[prevTodos.length - 1].id + 1,
  //       text: input,
  //       checked: false,
  //     });
  //   });
  // };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      const id =
        prevTodos.length === 0 ? 0 : prevTodos[prevTodos.length - 1].id + 1;
      const add = {
        text,
        checked: false,
      };
      localStorage.setItem(id, JSON.stringify(add));
      console.log(add);
      return prevTodos.concat({
        id,
        add,
      });
    });
  };

  console.log(todos);
  const toggleTodo = (element) => {
    setTodos((prevTodos) => {
      const copiedTodos = [...prevTodos];
      const idx = copiedTodos.indexOf(element);
      // console.log("찾은 idx: ", idx);
      if (idx < 0) return prevTodos; // 아무 일도 없음.
      copiedTodos[idx].checked = !copiedTodos[idx].checked;
      return copiedTodos;
    });
  };

  const removeTodo = (element) => {
    setTodos((prevTodos) => {
      // return prevTodos.filter((todo) => todo !== element);

      const temp = [...prevTodos];
      const index = temp.indexOf(element);
      localStorage.removeItem(index);
      temp.splice(index, 1);
      return temp;
    });
  };

  return (
    <TodoListTemplate form={<Form addTodo={addTodo} />}>
      <TodoItemList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      />
    </TodoListTemplate>
  );
}
// class App extends Component {

//   constructor (props) {
//     // id=3
//     super(props);
//     this.state = {
//       input:'',
//       todos:[
//         {id:0,text:'리액트 소개',checked:false},
//         {id:1, text:'리액트 소개',checked:true},
//         {id:2, text:'리액트.......', checked:false}
//       ]
//     } // 명시적으로 this. 을 안 붙여주신 이유가 있나요? 그리고 클래스형 컴포넌트에서는 이러한 값들을 constructor안에 넣어 줘야 하는 걸로 알고 있습니다.
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({
//       input: e.target.value
//     });
//   }
//   // handleChange = function (e) {
//   //     this.setState({
//   //       input: e.target.value
//   //     })
//   // }

//   handleCreate = () => {
//     const { input, todos } = this.state;
//     this.setState({
//       input: '',
//       todos: todos.concat({
//         id: this.id++,
//         text: input,
//         checked: false
//       })
//     });
//   }

//   handleKeyPress=(e)=>{
//     if(e.key==='Enter'){
//       this.handleCreate();
//     }
//   }
//   render() {
//     const { input } = this.state;
//     const {
//       handleChange,
//       handleCreate,
//       handleKeyPress
//     } = this;
//     // console.log('**',this.state);
//     return (
//       <TodoListTemplate form={(
//       <Form
//       value={input}
//       onKeyPress={handleKeyPress}
//       onChange={handleChange}
//       onCreate={handleCreate}/>
//       )}>
//         <TodoItemList todos={this.state.todos}/>
//         {/* 일단 여기서 참조를 잘못하셨습니다.. */}
//       </TodoListTemplate>
//     );
//   }
// }

export default App;
