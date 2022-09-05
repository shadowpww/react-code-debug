import React from "react";

class EventDemo extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {}

  onDemoClick = (e) => {
    this.setState({
      count: this.state.count + 1
    });
  };
  onClick = () => {
    console.log("触发点击");
    setTimeout(() => {
      this.setState({ count: 4 });
      console.log("this.count-4", this.state.count);
      this.setState({ count: 5 });
      console.log("this.count-5", this.state.count);
      this.setState({ count: 6 });
      console.log("this.count-6", this.state.count);
    });

    this.setState({ count: 1 });
    console.log("this.count-1", this.state.count);
    this.setState({ count: 2 });
    console.log("this.count-2", this.state.count);
    this.setState({ count: 3 });
    console.log("this.count-3", this.state.count);
  };
  render() {
    const { count } = this.state;

    return (
      <div className={"counter-parent"} onClick={this.onClick}>
        {count}
      </div>
    );
  }
}

export default EventDemo;
