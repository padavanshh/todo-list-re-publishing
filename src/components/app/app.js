import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import TodoList from "../todo-list/todo-list";
import React from "react";
import ItemAddForm from "../item-add-form/item-add-form";

export default class App extends React.Component {

    maxId = 100;

     state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
            ],
         term: ''
    };

     createTodoItem (label)  {
         return {
             label: label,
             important: false,
             id: this.maxId++
         }
     };

     deleteItem = (id) => {
         this.setState(({todoData}) => {
             const idx = todoData.findIndex((el) => el.id === id);
             const firstArr = todoData.slice(0, idx)
             const secondArr = todoData.slice(idx+1)

             const newArr = [...firstArr,...secondArr]

             return {
                 todoData: newArr
             }
         })
     };

     addItem = (text) => {
         const newItem = this.createTodoItem(text)

         this.setState(({todoData}) => {
             const newData =[...todoData, newItem]

             return {
                 todoData: newData
             }
         })

     };

     toggleImpDone = (arr, id, propop) => {
             const idx = arr.findIndex((el) => el.id === id);

             // update object
             const oldItem = arr[idx];
             const newItem = {...oldItem, [propop]: !oldItem[propop]};

             // construct new array
             return [
                 ...arr.slice(0, idx),
                 newItem,
                 ...arr.slice(idx + 1)
             ];
     }

     onToggleImportant =(id) => {
         this.setState(({todoData}) => {
             return {
                 todoData: this.toggleImpDone(todoData, id, 'important')
             };
         });
     }

    onToggleDone =(id) => {
         this.setState(({todoData}) => {
             return {
                 todoData: this.toggleImpDone(todoData, id, 'done')
             };
         });
    };

     onSearchChange = (term) => {
         this.setState({term})
     }

     search = (items, term) => {
         if (term.length === 0) {
             return items;
         }
         return items.filter((item) => {
             return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
         })
     }

    render() {
        const visibleItems = this.search(this.state.todoData, this.state.term)

        const doneCount = this.state.todoData.filter((el) => el.done === true).length;

        const todoCount = this.state.todoData.length - doneCount

    return (
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter />
            </div>

            <TodoList todos={visibleItems}
                      onDeleted={this.deleteItem}
                      onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
            <ItemAddForm addItem={this.addItem}/>
        </div>
    );
}
};
