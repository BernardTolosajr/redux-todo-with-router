import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  isCompleted(item) {
    return item.get('status') === 'completed';
  }

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
         (item) => this.props.filter === 'all' || item.get('status') === this.props.filter
      );
    }
    return [];
  }

  render() {
    return <section className="main">
      <ul className="todo-list">
        {this.getItems().map(item =>
          <TodoItem id = {item.get('id')}
                    key={item.get('text')}
                    text={item.get('text')}
                    isCompleted={this.isCompleted(item)}
                    isEditing={item.get('editing')}
                    toggleComplete={this.props.toggleComplete}
                    deleteItem={this.props.deleteItem}
                    doneEditing={this.props.doneEditing}
                    cancelEditing={this.props.cancelEditing}
                    editItem={this.props.editItem}/>
        )}
      </ul>
    </section>
  }
}
