import React from 'react'
import placeholder from '../assets/placeholder';

class Editor extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div id = {this.props.isExt ? 'editor-full' : ''} className={this.props.ext ? 'editor-null' : 'editor-wrapper'}>
          <header>Editor<button onClick={this.props.handleClick}>{this.props.isExt ?  <i className="fa-sharp fa-solid fa-minimize"></i> : <i className="fa-solid fa-maximize"></i>}</button></header>
          <textarea id = "editor" onChange={this.props.change} defaultValue={placeholder}></textarea>
        </div>
      )
    }
  }

  export default Editor