const ModalErrorData = props => {
  const { modalData } = props || {}
  return (
    <div>
      {
        modalData ?
          <div className="alert alert-danger">{modalData}</div> :
          <div />
      }
    </div>
  )
}

export default ModalErrorData;
