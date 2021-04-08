import react, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task(props) {

    const [inTask, setInTask] = useState();
    const [list, setList] = useState([]);

    const inputTask = async (ev) => {
        //console.log(ev.currentTarget.value);
        setInTask(ev.currentTarget.value);
        //console.log(inTask);
    }

    const addTask = () => {
        setList([...list, inTask]);
    }

    return (
        <div className={'container-fluid'} style={{ paddingTop: '10px', marginBlock: '50px' }}>
            <input type={'text'} onChange={inputTask} placeholder={' Add new task...'} className={'d-inline'}></input>
            &nbsp; &nbsp;
            <Button style={{ paddingLeft: '3em', paddingRight: '3em' }} onClick={addTask} >Add</Button>

            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>

                    )
                })}
            </ul>
        </div>
    );
}

export default Task;