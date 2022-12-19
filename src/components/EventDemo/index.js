import React from 'react'
import './index.css'
import EventBind from './eventBind';
class EventDemo extends React.Component{
  state = {
    count: 0,
  }
  
  constructor(){
    super();
    this.childRef = React.createRef();
  }

  componentDidMount() {

  }

  onDemoClick = e => {
    console.log('onDemoClick 被触发');
    this.setState({
      count: this.state.count + 1
    })
  }
  onParentClick = () => {
    console.log('父级元素的点击事件被触发了');
  }
  onParentClickCapture = () => {
    console.log('父级元素捕获到点击事件');
  }
  onSubCounterClick = () => {
    console.log('子元素点击事件',this.childRef);
  }
  render() {
    let src = `"/><script>alert('XSS');</script>`;
    const { count } = this.state;
    console.log('count=======',count);
    return <div
        className={'counter-parent'}
        onClick={this.onParentClick}
        onClickCapture={this.onParentClickCapture}
    >
      counter-parent
      <div
          onClick={this.onDemoClick}
          className={'counter'}
      >
        counter：{count}
        <div className={'sub-counter'}  ref={this.childRef} onClick={this.onSubCounterClick}>
          子组件
        </div>
      </div>
    <img src={src}/>
    </div>
  }
}

export default EventDemo
