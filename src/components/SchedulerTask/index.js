import React,{scheduleCallback,IdlePriority,NormalPriority,ImmediatePriority} from 'react'
import './indes.css'
class SchedulerTask extends React.Component {
  constructor(props) {
    super(props)
    this.buttonRef = React.createRef();
  }
  state = {
    count: 0,
    positionX: 0,
    positionY: 0,
    moving: false,
    parentX: 0,
    parentY: 0,
    test:0,
  }
  componentDidMount() {
   
    // const target = document.getElementById('drag-element')
    // target.addEventListener('mousedown', e => {
    //   const x = e.clientX - target.offsetLeft;
    //   const y = e.clientY- target.offsetTop;

    //   document.onmousemove = function(moveE){
    //     target.style.left = moveE.clientX - x + 'px'
    //     target.style.top = moveE.clientY - y + 'px'
    //   };
    //   document.onmouseup = function() {
    //     document.onmousemove = null;
    //     document.onmouseup = null;
    //   }
    // })

  }
  handleButtonClick = () => {
    this.setState( prevState => {
      return { count: prevState.count + 2 }
    } )

    setTimeout(()=>{
      this.setState({
        test: ++this.state.test,
      })
    },10000) 
  }
  onBeginTask = () => {
    // setTimeout( () => this.setState( { count: this.state.count + 1 } ), 0 )
    // console.log('scheduleCallback',scheduleCallback,IdlePriority);
    // scheduleCallback(IdlePriority,(isOverTime)=>{
    //   console.log('1.-------------------1',isOverTime);
    // });
    // let i = 0;
    // function loop(){
    //   if(i <1000){
    //     console.log('2++++++++++.i',++i);
    //     return loop;
    //   }
    //   return 'complete';
    // }
    // scheduleCallback(NormalPriority,loop);
    // scheduleCallback(ImmediatePriority,()=>{
    //   console.log('3.Z************ImmediatePriority 来执行了哦');
    //   return ()=>{
    //     console.log('3.continue--------------3-1');
    //   }
    // });
    this.handleButtonClick();
  }

  render() {
    const { count,test } = this.state
    return <div className={"task-with-different-priorities"}>
      <div className="counter">
        <button onClick={this.onBeginTask}>开始</button>
        <div>test:{test}</div>
        <div>count:{count}</div>
        {/* <div>
          {Array.from(new Array(140000)).map( (v,index) =>
            <div key={index}>{count}</div>
          )}
        </div> */}
      </div>
      <div className="drag-wrapper">
        <div
          id={'drag-element'}
          style={{
            position: 'absolute',
          }}
        >
        </div>
      </div>
    </div>
  }
}
export default SchedulerTask
