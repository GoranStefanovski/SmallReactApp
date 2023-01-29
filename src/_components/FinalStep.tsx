import IssueReported from '../assets/IssueReported.svg'
import closeBtn from '../../src/assets/black_close.svg';
function FinalStep(props: any) {
  function sendIssue() {
    props.setItFinalStep(false)
  }
  const closePopUp = () => {
    props.setItFinalStep(false)
  }

  return (
  <div className='modal-wrapper'>
    <div className='modal-wrapper__inner'>
      <div className='modal-header'>
          <span className='modal-close_btn'><img onClick={closePopUp} src={closeBtn} alt="" /></span>
      </div>   
      <div className='modal-body modal-body_final-step'>
          <img src={IssueReported} alt="Placeholder"/>
          <p>Issue Successful Reported</p>
      </div>
      <div className='modal-footer'>
        <button onClick={sendIssue} className='modal-footer-button'>Done</button>
      </div>
    </div>
  </div>
  )
}

export default FinalStep