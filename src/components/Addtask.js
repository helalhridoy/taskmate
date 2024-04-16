import React from 'react'

function Addtask({ tasklist, setTasklist, task, setTask }) {

    const handleTaskadd = (e) => {
        e.preventDefault();
        const date = new Date();
        if (task.id) {
            const updateTask = tasklist.map((todo) => (
                todo.id === task.id ? { id: task.id, name: e.target.task.value, time: todo.time } : todo
            ));
            setTasklist(updateTask)
            setTask({});
            e.target.task.value = "";

        } else {


            const task = {
                "id": date.getTime(),
                "name": e.target.task.value,
                "time": `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, task]);
            setTask({});
            e.target.task.value = "";
        }
    }
    return (
        <section className='addTask'>
            <form onSubmit={handleTaskadd} >
                <input type="text" name='task' value={task.name || ""} autoComplete='off' placeholder='add text' maxLength="25" onChange={(e) => setTask({ "id": task.id, "name": e.target.value, "time": task.time })} />
                <button type='submit'>{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}

export default Addtask