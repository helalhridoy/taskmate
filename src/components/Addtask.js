import React from 'react'

function Addtask() {
    return (
        <section className='addTask'>
            <form >
                <input type="text" name='task' autoComplete='off' placeholder='add text' maxLength="25" />
                <button type='submit'>add</button>
            </form>
        </section>
    )
}

export default Addtask