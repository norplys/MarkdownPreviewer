import React from 'react'
import './App.css'
import Previewer from './component/Preview';
import Editor from './component/editor';
import placeholder from './assets/placeholder';


const defaultState = placeholder;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorText: placeholder,
      text : ``,
      editorExt : false,
      previewExt : false,
      
    }
  }

  handleChange(event) {
    this.setState({
      editorText: `${event.target.value}`,
    })
  }
  editorExtHandler(){
    this.setState({
        editorExt : !this.state.editorExt
    })
  }
  previewExtHandler(){
    this.setState({
      previewExt : !this.state.previewExt
    })
  }


  render() {
    return (
      <>
        <Editor editorExt = {this.state.editorExt} change = {this.handleChange.bind(this)} value = {this.state.text} handleClick = {this.editorExtHandler.bind(this)} ext = {this.state.previewExt} isExt = {this.state.editorExt} />
        <Previewer text = {this.state.editorText} handleClick = {this.previewExtHandler.bind(this)} ext = {this.state.editorExt} isExt = {this.state.previewExt}/>
      </>
    )
  }
}
export default App
