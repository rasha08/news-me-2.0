const Checkbox = props => {
  const { name, label, describedby, callback } = props;
  let value = '';

  const updateValue = val => {
    callback(val.target.checked, name)
  }

  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={name}
        aria-describedby={`${name}Help`}
        onChange={val => updateValue(val)}
      />
      <label htmlFor={name} className="form-check-label">{label}</label>
      {
        describedby ?
          <small id={`${name}Help`} className="form-text text-muted">{describedby}</small> :
          <small />
      }

    </div>
  );
}

export default Checkbox;