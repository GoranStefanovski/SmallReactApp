import IssueReported from '../assets/IssueReported.svg'

function FinalStep(props: any) {
    function sendIssue() {
        props.setItFinalStep(false)
        props.setIsRecordingDone(false)
    }
  return (
    <div className='countdown'>
        <div className='send_rec-inner'>
            <img className='send_rec-inner-img' src={IssueReported} alt="Placeholder"/>
            <p className='send_rec-inner_text'>Issue Successful Reported</p>
            <button onClick={sendIssue} className='send_rec-inner_btn send_rec-inner_btn-no--border'>Done</button>
        </div>
    </div>
  )
}

export default FinalStep