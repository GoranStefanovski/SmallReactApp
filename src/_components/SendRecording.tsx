import placeholder from '../assets/placeholderImg.svg'
import closeBtn from '../../src/assets/black_close.svg';
import { isMessage } from '../../src/features/message/messageSlice'
import { useDispatch } from 'react-redux'

function SendRecording(props: any) {
  const dispatch = useDispatch();
  function sendMessage() {
    props.setItFinalStep(true)
    dispatch(isMessage());
  }

  const closePopUp = () => {
    dispatch(isMessage());
  }
  return (  
    <div className='countdown'>
        <div className='send_rec-inner'>
          <span>
            <img src={placeholder} alt="Placeholder"/>
            <span className='send_rec-inner-close'><img onClick={closePopUp} src={closeBtn} alt="" /></span>
          </span>
            <textarea placeholder="Please write a message"/>
          <span>
            <button onClick={sendMessage} className='send_rec-inner_btn send_rec-inner_btn-no--border'>Send</button>
          </span>
        </div>
    </div>
  )
}

export default SendRecording