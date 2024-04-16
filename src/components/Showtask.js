import React from 'react'

const tasks = [
    { id: 1001, name: "Task A", time: "2-5 PM" },
    { id: 1002, name: "Task B", time: "2-5 PM" },
    { id: 1003, name: "Task C", time: "2-5 PM" },
    { id: 1004, name: "Task D", time: "2-5 PM" },
    { id: 1005, name: "Task E", time: "2-5 PM" },
]

function Showtask() {
    return (
        <section className="showTask">
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>0</span>

                </div>
                <button className='clearAll'>Clear All</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li>
                        <p>
                            <span className={"name"}>{task.name}</span>
                            <span className="time"> {task.time}</span>
                        </p>
                        <i className='bi bi-pencil-square'></i>
                        <i className='bi bi-trash'></i>
                    </li>
                ))}
            </ul>



        </section>
    )
}

export default Showtask