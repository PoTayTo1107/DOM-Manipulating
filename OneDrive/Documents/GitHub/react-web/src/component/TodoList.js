import React from 'react';
import Button from '@atlaskit/button';
import Todo from './Todo';

export default function TodoList ({todoList}){
    return(
        <>
        {
            todoList.map(todo => <Todo todo={todo} />)
        }
        </>
    );

}