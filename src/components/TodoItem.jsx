import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TextInput from './TextInput';
import classNames from 'classnames';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    var itemClass= classNames({
      'todo': true,
      'completed': this.props.isCompleted,
      'editing': this.props.isEditing
    });

    return <li className={itemClass}>
      <div className="view">
        <input type="checkbox"
               className="toggle"
               onClick={() => this.props.toggleComplete(this.props.id)}
               defaultChecked={this.props.isCompleted}/>
        <label htmlFor="todo" ref="text" onDoubleClick={() => this.props.editItem(this.props.id)}>
          {this.props.text}
        </label>
        <button
          className="destroy"
          onClick={() => this.props.deleteItem(this.props.id)}></button>
      </div>
        <TextInput
          text={this.props.text}
          itemId={this.props.id}
          cancelEditing={this.props.cancelEditing} 
          doneEditing={this.props.doneEditing}
        />
    </li>
  }
};
