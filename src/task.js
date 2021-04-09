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

            <div>
                <div className={"col-xs-12 d-flex justify-content-center"}>
                    <div>
                        <input type={'text'} style={{ padding: '2.5px', cursor: 'pointer', color: 'black', backgroundColor: '#1c94a1', borderColor: 'black' }} onChange={inputTask} placeholder={' Add a new task here!'} className={'d-inline'}></input>
                    </div>
                &nbsp; &nbsp;
                    <div>
                        <Button style={{ paddingLeft: '3em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: 'black', borderColor: 'black' }} onClick={addTask} >Add</Button>
                    </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
            </div>

            <div className={'container justify-content-center'}>
                <h3 style={{ textAlign: 'center', paddingTop: '1em'}}>To-Do List:</h3>
                    <ul>
                        {list.map((item, index) => {
                            return (
                                <li className={' container bg-info text-uppercase'} style={{ listStyleType: 'none', borderColor: 'black', color: '#ffcc5c', fontWeight: 'bold', fontSize: 'medium' }} key={index} >
                                    <input type={'checkbox'}></input>
                                    &nbsp;
                                    {item} 
                                </li>
                            )
                        })}
                    </ul>
            </div>
        </div>
    );
}

export default Task;