import { useCallback, useState } from "react"

export const useTodoList = (intialState=[])=>{
    const [todoList, setTodoList] = useState(intialState)
    const addItem = (item) =>{
        setTodoList([...todoList, 
        {
            id: Date.now().toString(),
            data: item,
            selected: false
        }])
    }
    const toggleTodoItem = useCallback((id)=>{
        const newList = todoList.map((item)=>{
            if(id===item.id){
                return {
                    ...item,
                    selected: !item.selected
                }
            }
            return item 
        })
        setTodoList(newList)
    },[todoList, setTodoList])

    const removeItem = useCallback((id)=>{
        const newList = todoList.filter((item)=>id!==item.id)
        setTodoList(newList)
    },[todoList, setTodoList])

    return [todoList, addItem, toggleTodoItem, removeItem]
}