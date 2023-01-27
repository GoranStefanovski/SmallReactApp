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
    <div className='countdown'>
        <div className='send_rec-inner'>
          <span>
            <img className='send_rec-inner-img send_rec-inner-img-no_border' src={IssueReported} alt="Placeholder"/>
            <span className='send_rec-inner-close send_rec-inner-close_final'><img onClick={closePopUp} src={closeBtn} alt="" /></span>
          </span>
            <p className='send_rec-inner_text'>Issue Successful Reported</p>
            <span>
            <button onClick={sendIssue} className='send_rec-inner_btn send_rec-inner_btn-no--border'>Done</button>
          </span>
        </div>
    </div>
  )
}

export default FinalStep