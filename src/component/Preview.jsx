import React from 'react'
import { marked } from 'marked';


class Previewer extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
    marked.setOptions({
      breaks : true,
    })
      return (
        <div id = {this.props.isExt ? 'previewer-full' : ''} className={this.props.ext ? 'previewer-null' : 'previewer'}>
          <header>Previewer<button onClick = {this.props.handleClick}>{this.props.isExt ?  <i className="fa-sharp fa-solid fa-minimize"></i> : <i className="fa-solid fa-maximize"></i>}</button></header>
          <main>
            <div className = 'renderer' dangerouslySetInnerHTML={{__html : marked(this.props.text) }}></div>
          </main>
        </div>
      )
    }
  }

  export default Previewer