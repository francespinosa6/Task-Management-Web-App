import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Task(props) {
                                                           //Variables and array
        const [inTask, setInTask] = useState();
        const [list, setList] = useState([]);
        const [currentTab, setCurrentTab] = useState();

        const inputTask = async (ev) => {
            setInTask(ev.currentTarget.value);             //Gets input value from input field
        }

        React.useEffect(() => {
            const json = localStorage.getItem('list');    //Creates a local storage for every item added to the list
            const loadedTasks = JSON.parse(json);
            if (loadedTasks) {
                setList(loadedTasks);
                setCurrentTab('all');                      //Sets tab 'All' as default
            }
        }, []);
        
        React.useEffect(() => {
            const json = JSON.stringify(list);             
            localStorage.setItem("list", json);
        }, [list]);

        const addTask = async () => {                      //Adds a task and set status to active
            if (inTask.length > 0) {
                setList([...list, { string: inTask, status: 'active' }]);
                setInTask('');
            }
        }

        const completedTask = async (index) => {
            let updatedList = [...list].map((item) => {     //checks if item is marked as completed and changes the status
                if (item === index) {
                    if(item.completed === true)
                    {
                        item.status = 'active';
                        item.completed = false;
                    }
                    else
                    {
                        item.status = 'completed';
                        item.completed = true;
                    }
                }
                return item;
            })
            console.log(updatedList)
            setList(updatedList);
        }

        const deleteTask = async (index) => {               //To delete task
            console.log(index)
            let updatedList = [...list].filter((item) => item !== index);
            console.log(updatedList)
            setList(updatedList);
        }

        const onEnterPress = async (ev) => {               //Adds item to the list upon clicking the enter key
            if (ev.key === 'Enter') {
                if (inTask.length > 0) {
                    setList([...list, { string: inTask, status: 'active' }]);
                    setInTask('');
                }
            }
        }

        return (
            <div className={'container-fluid'} style={{ paddingTop: '10px', marginBlock: '50px' }}>

                <div>
                    <div className={"col-xs-12 d-flex justify-content-center"}>
                        <div>                                                   {/*Input Field*/}
                            <input type={'text'} value={inTask} placeholder={' Add new task here...'} onKeyDown={onEnterPress} style={{ padding: '2.5px', cursor: 'pointer', color: 'black', backgroundColor: '#1c94a1', borderColor: 'black' }} onChange={inputTask} className={'d-inline'}></input>
                        </div>
                &nbsp; &nbsp;
                    <div>                                                       {/*Button*/}
                            <Button style={{ paddingLeft: '3em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: 'black', borderColor: 'black' }} onClick={addTask} >Add<i class="far fa-trash-alt"></i></Button>
                        </div>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
                </div>

                <div className={'container justify-content-center'}>
                    {list.length > 0 && currentTab && <h3 style={{ textAlign: 'center', paddingTop: '1em' }}>To-do List: </h3>}  {/*Only shows when list is not empty*/}
                    <ul>{
                        list.map((item, index) => {
                            if (currentTab === 'completed' && item.completed) {        //Dispalys list of completed items
                                return (
                                    <li className={' container bg-info border border-dark text-uppercase'} style={{ listStyleType: 'none', color: '#ffcc5c', fontWeight: 'bold', fontSize: 'medium' }} key={index} >
                                        <input type={'checkbox'} checked={item.completed} onChange={() => completedTask(item)} style={{ cursor: 'pointer' }}></input>
                                        &nbsp;
                                        {item.string} < DeleteOutlined onClick={() => deleteTask(item)} className={'float-right p-1'} style={{ color: 'darkred' }} />
                                    </li>
                                )
                            }
                            else if (currentTab === 'active' && !(item.completed)) {   //Displays list of active items
                                return (
                                    <li className={' container bg-info border border-dark text-uppercase'} style={{ listStyleType: 'none', color: '#ffcc5c', fontWeight: 'bold', fontSize: 'medium' }} key={index} >
                                        <input type={'checkbox'} checked={item.completed} onChange={() => completedTask(item)} style={{ cursor: 'pointer' }}></input>
                                        &nbsp;
                                        {item.string} < DeleteOutlined onClick={() => deleteTask(item)} className={'float-right p-1'} style={{ color: 'darkred' }} />
                                    </li>
                                )
                            } else if (currentTab === 'all') {                         //Displays list of All items
                                return (
                                    <li className={' container bg-info border border-dark text-uppercase'} style={{ listStyleType: 'none', color: '#ffcc5c', fontWeight: 'bold', fontSize: 'medium' }} key={index} >
                                        <input type={'checkbox'} checked={item.completed} onChange={() => completedTask(item)} style={{ cursor: 'pointer' }}></input>
                                        &nbsp;
                                        {item.string} < DeleteOutlined onClick={() => deleteTask(item)} className={'float-right p-1'} style={{ color: 'darkred' }} />
                                    </li>
                                )
                            }
                          
                           })
                    
                        }
                    </ul>
                </div>
                <br /><br />
                <div className={"col-xs-12 d-flex justify-content-center"}>    {/*Buttons to filter list as completed, active or all*/}

                    <h4>Show:</h4>&nbsp;   

                    <Button onClick={() => { setCurrentTab('all') }} style={currentTab === 'all' ? { paddingLeft: '2em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: '#ffcc5c', borderColor: 'black' } : { paddingLeft: '2em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: 'black', borderColor: 'black' }}>All</Button>

                    <Button onClick={() => { setCurrentTab('active') }} style={currentTab === 'active' ? { paddingLeft: '2em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: '#ffcc5c', borderColor: 'black' } : { paddingLeft: '2em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: 'black', borderColor: 'black' }}>Active</Button>

                    <Button onClick={() => { setCurrentTab('completed') }} style={currentTab === 'completed' ? { paddingLeft: '2em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: '#ffcc5c', borderColor: 'black' } : { paddingLeft: '2em', paddingRight: '3em', backgroundColor: '#1c94a1', fontWeight: 'bold', color: 'black', borderColor: 'black' }} >Completed</Button>
                    
                </div>
            </div>
        );
    }

export default Task;