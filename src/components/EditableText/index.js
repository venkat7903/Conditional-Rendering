import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {textInput: '', isEditable: true}

  ClickBtn = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput, isEditable} = this.state
    return (
      <div className="app-container">
        <div className="sub-app-container">
          <h1 className="app-title">Editable Text Input</h1>
          <div className="input-btn-container">
            {isEditable ? (
              <input
                type="text"
                className="text-input"
                onChange={this.onChangeText}
                value={textInput}
              />
            ) : (
              <p>{textInput}</p>
            )}
            <button type="button" className="button" onClick={this.ClickBtn}>
              {isEditable ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
