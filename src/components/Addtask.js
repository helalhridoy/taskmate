import React from 'react'

function Addtask({ tasklist, setTasklist }) {
    const handleTaskadd = (e) => {
        e.preventDefault();
        const date = new Date();
        const task = {
            id: date.getTime,
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasklist([...tasklist, task]);
        e.target.task.value = "";
    }
    return (
        <section className='addTask'>
            <form onSubmit={handleTaskadd} >
                <input type="text" name='task' autoComplete='off' placeholder='add text' maxLength="25" />
                <button type='submit'>add</button>
            </form>
        </section>
    )
}

export default Addtask