import react, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task(props) {

    const [inTask, setInTask] = useState();
    const [list, setList] = useState([]);

    const inputTask = async (ev) => {
        //console.log(ev.currentTarget.value);
        setInTask(ev.currentTarget.value);
        //console.log(inTask);
    }

    const addTask = async () => {
        if (inTask.length > 0) {
            setList([...list, inTask]);
            setInTask('');
        }
    }

    const onEnterPress = async (ev) => {
        if (ev.key === 'Enter') {
            if (inTask.length > 0) {
                setList([...list, inTask]);
                setInTask('');
            }
        }
    }

    return (
        <div className={'container-fluid'} style={{ paddingTop: '10px', marginBlock: '50px' }}>

            <div>
                <div className={"col-xs-12 d-flex justify-content-center"}>
                    <div>
                        <input type={'text'} value={inTask} placeholder={' Add new task here...'} onKeyDown={onEnterPress} style={{ padding: '2.5px', cursor: 'pointer', color: 'black', backgroundColor: '#1c94a1', borderColor: 'black' }} onChange={inputTask} className={'d-inline'}></input>
                    </div>
                &nbsp; &nbsp;
                    <div>
                        <Button style={{ paddingLeft: '3em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: 'black', borderColor: 'black' }} onClick={addTask} >Add<i class="far fa-trash-alt"></i></Button>
                    </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
            </div>

            <div className={'container justify-content-center'}>
                <h3 style={{ textAlign: 'center', paddingTop: '1em' }}>To-Do List:</h3>
                {JSON.stringify(list)}
                <ul>
                    {list.map((item, index) => {
                        return (
                            <li className={' container bg-info border border-dark text-uppercase'} style={{ listStyleType: 'none', color: '#ffcc5c', fontWeight: 'bold', fontSize: 'medium' }} key={index} >
                                <input type={'checkbox'} style={{ cursor: 'pointer' }}></input>
                                    &nbsp;
                                { item} < DeleteOutlined className={'float-right p-1'} style={{ color: 'darkred' }} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Task;