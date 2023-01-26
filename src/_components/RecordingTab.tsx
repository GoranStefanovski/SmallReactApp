import pauseBtn from '../../src/assets/Pause.svg'
import StopBtn from '../../src/assets/Stop.svg'
import CloseBtn from '../../src/assets/Close.svg'
import { toggle } from '../../src/features/recording/recordingSlice'
import { useSelector, useDispatch } from 'react-redux'
import { isMessageTrue } from '../../src/features/message/messageSlice';


function RecordingTab() {
    const isRecording = useSelector((state: any) => state.recording.value)
    const dispatch = useDispatch();
    const closePopUp = () => {
        dispatch(toggle())
        dispatch(isMessageTrue())
        
    };

    function pauseRecording() {
    }

    function stopRecording() {
        dispatch(toggle())
        dispatch(isMessageTrue())
    }
    
  return (
    <div style={{display: isRecording ? 'flex' : 'none'}} className='recording'>
        <div className='recording_inner recording_inner-rotate'>
        <span className='recording-time recording_inner-rotate'>
            00:00
        </span>
        <span onClick={pauseRecording} className='control recording-pause recording_inner-rotate'>
            <img src={pauseBtn} alt=""/>
        </span>
        <span onClick={stopRecording} className='control recording-stop recording_inner-rotate'>
        <img  src={StopBtn} alt=""/>
        </span>
        <span onClick={closePopUp} className='control recording-close recording_inner-rotate'>
            <img src={CloseBtn} alt=""/>
        </span>
        </div>
    </div>
  )
}

export default RecordingTab;