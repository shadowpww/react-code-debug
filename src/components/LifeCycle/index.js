import React from 'react';
import ReactDOM from 'react-dom';
const buildClass = (name)=>{
    return class extends React.Component{
        constructor(props) {
            super(props);
            console.log( name + ' constructor');
        }
        componentWillMount() {
            console.log( name + ' componentWillMount');
        }
        componentDidMount() {
            console.log( name + ' componentDidMount');
        }
        componentWillUnmount() {
            console.log( name + ' componentWillUnmount');
        }
        componentWillReceiveProps(nextProps) {
            console.log( name + ' componentWillReceiveProps(nextProps)');
        }
        shouldComponentUpdate(nextProps, nextState) {
            console.log( name + ' shouldComponentUpdate(nextProps, nextState)');
            return true;
        }
        componentWillUpdate(nextProps, nextState) {
            console.log( name + ' componentWillUpdate(nextProps, nextState)');
        }
        componentDidUpdate(prevProps, prevState) {
            console.log( name + ' componetDidUpdate(prevProps, prevState)');
        }
    }
}
class Child extends buildClass('Child'){
    render(){
        console.log('Child render')
        return (
            <div>child</div>
        )
    }
}
class Parent extends buildClass('Parent'){
    render(){
        console.log('Parent render')
        return (
            <Child />
        )
    }
}
export default Parent