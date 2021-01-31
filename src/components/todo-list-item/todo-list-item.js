import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }

     onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })}

     onMakeImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
        }

    render() {
        const { label, onDeleted } = this.props;
        const {done, important} = this.state;

        let classNames = 'todo-list-item'
        if (done === true) {
            classNames += 'done';
        }

        if (important === true) {
            classNames += 'important'
        }

        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={this.onMakeImportant}>
        <i className="fa fa-exclamation" />  {/*сделать важным*/}
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
        );
    }
};