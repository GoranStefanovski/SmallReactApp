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
    <div className='modal-wrapper'>
      <div className='modal-wrapper__inner'>
        <div className='modal-header'>
          <span className='modal-close_btn'><img onClick={closePopUp} src={closeBtn} alt="" /></span>
        </div>   
        <div className='modal-body'>
          <img src={placeholder} alt="Placeholder"/>
          <textarea placeholder="Please write a message"/>
        </div>
        <div className='modal-footer'>
          <button onClick={sendMessage} className='modal-footer-button'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default SendRecording