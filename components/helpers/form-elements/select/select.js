import { map } from 'lodash';

const Select = props => {
  const { name, label, describedby, callback, options } = props;
  let value = '';

  const updateValue = val => {
    callback(val.target.value, name)
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="custom-select custom-select-lg mb-3" onChange={updateValue}>
        <option vale="">Select your age</option>)
        {
          map(options, option => <option vale={option} key={option}>{option}</option>)
        }
      </select>
    </div>
  );
}

export default Select;