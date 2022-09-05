import React, { useState } from 'react';
import State from './components/State'
import LanesDemo from './components/LanesDemo'
import AppSibling from './components/AppSibling'
import TasksWithDifferentPriorities from './components/TasksWithDifferentPriorities'
import SchedulerTask from './components/SchedulerTask'
import Concurrent from './components/ConcurrentInput'
import Diff from './components/Diff'
import PropsDiff from './components/PropsDiff'
import Hooks from "./components/Hooks";
import EventDemo from "./components/EventDemo";
import JSX from './components/JSX';
// import Test from './components/testGetDerivedLifeCycle';
import Test from './components/test/index';
import ContextDemo from "./components/Context";
import LifeCycle from './components/LifeCycle';

import { BrowserRouter as Router , useHistory,Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import './App.css';

// propsDiff
/*class App extends React.Component {m
  render() {
    return <PropsDiff/>
  }
}*/

const menusList = [
  {
    name: '1.JSX',
    path: '/jsx',
    component:JSX
  },
  {name:'test',
  path:'/test',
  component:Test
  },
  {name:'diff',
  path:'/diff',
  component:Diff
  },
  {name:'hooks',
  path:'/hooks',
  component:Hooks
  },
  {name:'LifeCycle',
  path:'/LifeCycle',
  component:LifeCycle
  },
  {name:'SchedulerTask',
  path:'/SchedulerTask',
  component:SchedulerTask
  },
  {
    name:'EventDemo',
  path:'/EventDemo',
  component:EventDemo
  },
  {
    name:'TasksWithDifferentPriorities',
  path:'/TasksWithDifferentPriorities',
  component:TasksWithDifferentPriorities
  }
]

function Meuns(){
  const history = useHistory()
   return <div className="theStyle" >
   {menusList.map(item=><span className="routerLink"
       key={item.path}
       onClick={()=> {  history.push(item.path) }}
                        >{item.name}</span>)}
  </div>
}

function App() {

  // 事件系统
  // return <EventDemo/>

  // return <Hooks/>
  // fiber树
  // return (
  //   <div className="App">
  //     <span className={'app-span'} onClick={() => setCount(count + 1)}>App{count}</span>
  //     <AppSibling count={count}/>
  //   </div>
  // );

  // Scheduler调度任务与用户交互
  // return <SchedulerTask/>

  // 高优先级插队
  // return <TasksWithDifferentPriorities/>

  // context
  // return <ContextDemo/>

  // diff 算法
  // return <Diff ref={'diffRef'}/>

  return <div style={{padding:30}}> <Router  >
  <Meuns/>
  <Switch>
  <div style={{ paddingTop:'50px' }} >
      {renderRoutes(menusList)}
  </div>
  </Switch>
</Router></div>
}

export default App;
