import TodoList from "./component/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [textInput, setTextInput] = useState("");

    const onTextInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const onAddBtnClick = (e) => {
        setTodoList([
            ...todoList,
            { id: v4(), name: textInput, isCompleted: false },
        ]);
    };

    return (
        <>
            <h3>TodoList</h3>
            <Textfield
                name="add-todo"
                placeholder="Add to do"
                elemAfterInput={
                    <Button
                        isDisabled={!textInput}
                        appearance="primary"
                        onClick={onAddBtnClick}
                    >
                        Add
                    </Button>
                }
                css={{ padding: "2px 4px 2px" }}
                value={textInput}
                onChange={onTextInputChange}
            ></Textfield>
            <TodoList todoList={todoList} />
        </>
    );
}

export default App;
