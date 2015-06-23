// LIBRARY
import React from 'react';

// COMPONENT
import TodoItem from './TodoItem';
import TodoTextInput from './TodoTextInput';
import TodoSnapshots from './TodoSnapshots';

// FLUX
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import SnapshotStore from '../../stores/SnapshotStore';
import connectToStores from 'alt/utils/connectToStores';

let todoSection = class TodoSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    // retrieve data from store
    let storeProps = TodoSection.getPropsFromStores();
    // build with current data
    let allTodos = storeProps.allData,
        todos = [];
    // generate todo item list
    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <div>
        <h1>TODO PAGE</h1>
        <div className='todo'>
          <p>First add some tasks by pressing enter key</p>
          <TodoTextInput className='edit' id='new-todo' placeholder='What needs to be done ?' onSave={this._onSave.bind(this)} value='' />
          <ul id='todo-list'>{todos}</ul>
        </div>
        <TodoSnapshots snapshots={storeProps.snapshots} />
      </div>
    );
  }

  _onSave(text) {
    if (text.trim()){
      AppActions.create(text);
    }
  }

  static getStores() {
    return [AppStore, SnapshotStore];
  }

  static getPropsFromStores() {
    return {
      allData: AppStore.getState().data,
      areAllComplete: AppStore.areAllComplete(),
      snapshots: SnapshotStore.getState().snapshots
    };
  }
};

todoSection.prototype.displayName = 'TodoSection';

export default connectToStores(todoSection);
