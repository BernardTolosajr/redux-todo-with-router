import React from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import * as actionCreators from '../action_creators';

export default class TodoApp extends React.Component {
  render() {
    return <div>
      <section className="todoapp">
        <TodoHeader addItem={this.props.addItem}/>
        <TodoList {...this.props}/>
      </section>
    </div>
  }
};

function mapStateToProps(state) {
  return {
    todos: state.todos.get('todos'),
    filter: state.todos.get('filter')
  };
}

export const TodoAppContainer = connect(mapStateToProps, actionCreators)(TodoApp);
