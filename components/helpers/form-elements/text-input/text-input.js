import { Component } from 'react';

class TextInput extends Component {
  constructor (props) {
    super()
    this.state = {
      props,
      value: '',
      error: ''
    }
  }

  updateValue (val) {
    this.setState({value: val.target.value});
  }

  sendValueIfValid () {
    if (this.state.props.validator(this.state.value)) {
      this.state.props.callback(this.state.value, this.state.props.name);
      this.setState({error: ''});
    } else {
      this.setState({error: this.state.props.errorMessage});
    }
  }

  render () {
    const { name, type, label, placeholder, describedby } = this.state.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={name}
          aria-describedby={`${name}Help`}
          placeholder={placeholder}
          onBlur={() => this.sendValueIfValid()}
          onChange={val => this.updateValue(val)}
        />
        {
          describedby ?
            <small id={`${name}Help`} className="form-text text-muted">{describedby}</small> :
            <small />
        }

        {
          this.state.error ?
            <small id={`${name}Help`} className="form-text text-danger">{this.state.error}</small> :
            <small />
        }

      </div>
    );
  }
}

export default TextInput;