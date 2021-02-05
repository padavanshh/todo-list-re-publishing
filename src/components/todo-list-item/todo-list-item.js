import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    render() {
        const { label, onDeleted, onToggleDone, onToggleImportant, done, important } = this.props;

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
          onClick={ onToggleDone }>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
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