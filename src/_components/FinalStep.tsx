import IssueReported from '../assets/IssueReported.svg'
import { useDispatch } from 'react-redux'
import { isMessage } from '../../src/features/message/messageSlice'
function FinalStep(props: any) {
  const dispatch = useDispatch();
  function sendIssue() {
        props.setItFinalStep(false)
        dispatch(isMessage())

    }
  return (
    <div className='countdown'>
        <div className='send_rec-inner'>
            <img className='send_rec-inner-img send_rec-inner-img-no_border' src={IssueReported} alt="Placeholder"/>
            <p className='send_rec-inner_text'>Issue Successful Reported</p>
            <button onClick={sendIssue} className='send_rec-inner_btn send_rec-inner_btn-no--border'>Done</button>
        </div>
    </div>
  )
}

export default FinalStep