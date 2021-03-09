import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList'

class App extends Component {
  render() {
    return(
      <TodoListTemplate form={<Form/>}>
        <TodoItemList/>
        이상해 이거
      </TodoListTemplate>
    )
  }
}

export default App;
