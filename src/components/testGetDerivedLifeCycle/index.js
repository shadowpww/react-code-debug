import React from 'react';


/**
 * 这个例子验证了 setState操作对于state的状态处理会在 getDerivedStateFromProps钩子函数之前，因此getDerivedStateFromProps的返回结果会覆盖掉this.setState的操作的值
 */
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a:0,
            b:1,
        }
    }
    // static getDerivedStateFromProps(props,preState){
    //     console.log('preState',preState);
    //     return {a:-1}
    // }
    innerClick(){
        console.log('1',this.state.a);
        setTimeout(()=>{
            console.log('2-1',this.state.a);
            this.setState({
                a:1
            })
            console.log('2-2',this.state.a);
        },0)
        this.setState({a:3});
        console.log('2',this.state.a);
        this.setState({a:4})
        console.log('3',this.state.a);
    }
   render(){
      return  <><div>a:{this.state.a}-b:{this.state.b}</div>
      <button onClick={()=>this.innerClick()}>点击增加a</button></>
   }
}

export default Index