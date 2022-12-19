import React from 'react'

class Diff extends React.Component {
    state = {
        arr: ["A", "B","C"]
    }
    add(){
        this.setState({
            arr:["A","B"]
        })
    }
    render() {
        return <><div>
          {
              this.state.arr.map(v => {
                  return <div key={v}>{v}</div>
              })
          }
        </div>
         <button onClick={()=>this.add()}>增加节点</button> 
        </>
    }
}
export default Diff
