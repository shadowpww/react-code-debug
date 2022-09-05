import React from 'react'


class EventDemo extends React.Component{
  state = { count: 0 }
  onDemoClick = () => {
    console.log('counter的点击事件被触发了');
    this.setState({
      count: this.state.count + 1
    })
  }
  onParentClick = () => {
    console.log('父级元素的点击事件被触发了');
  }
  render() {
    const { count } = this.state
    return <div
      className={'counter-parent'}
      onClick={this.onParentClick}
    >
      <div
        onClick={this.onDemoClick}
        className={'counter'}
      >
        {count}
      </div>
    </div>
  }
}

export default EventDemo