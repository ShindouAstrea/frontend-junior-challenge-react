import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import {serializeArrayObjById,deserialize} from '../../utils/serialization';

export const getTodoList = createAsyncThunk('todos/getTodoList',async()=>{
    const response = await fetch('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos') ;
    return response.data ;
})
export const todoSlice = createSlice({
    name:'todos',
    initialState:[
        {
            "id": 0,
            "label": "Fix an ability to display all tasks",
            "checked": true
        },
        {
            "id": 1,
            "label": "Fix a layout, checkboxes should be listed in a column",
            "checked": false
        },
        {
            "id": 2,
            "label": "Fix an ability to add a new task",
            "checked": false
        },
        {
            "id": 3,
            "label": "Fix an ability to toggle a task",
            "checked": false
        },
        {
            "id": 4,
            "label": "Fix an ability to delete a task",
            "checked": false
        },
        {
            "id": 5,
            "label": "Fix an ability to count completed tasks",
            "checked": false
        }
    ],
    reducers: {
        addTodo:(state,action)=> {
            state.push(action.payload);
        },
        editTodo: (state,action)=> {
           let array = serializeArrayObjById(state);
           array[action.payload.id]["checked"] = !action.payload.checked; 
           array = deserialize(array);
           state = array ;
        },
        removeTodo: (state,action)=> {
            let array = serializeArrayObjById(state);
           delete array[action.payload];
           array = deserialize(array);
           return state = array ;
        }
    }
});
export const {addTodo, editTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer ;


