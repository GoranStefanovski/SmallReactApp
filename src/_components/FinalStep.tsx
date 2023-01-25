import IssueReported from '../assets/IssueReported.svg'

function FinalStep(props: any) {
    function sendIssue() {
        props.setItFinalStep(false)
        props.setIsRecordingDone(false)
    }
  return (
    <div className='countdown'>
        <div className='send_rec-inner'>
            <img src={IssueReported} alt="Placeholder"/>
            <button onClick={sendIssue} className='send_rec-inner_btn'>Done</button>
        </div>
    </div>
  )
}

export default FinalStep