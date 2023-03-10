import pauseBtn from '../../src/assets/Pause.svg'
import StopBtn from '../../src/assets/Stop.svg'
import PlayBtn from '../../src/assets/play.svg'
import CloseBtn from '../../src/assets/Close.svg'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../src/features/recording/recordingSlice'
import { isMessageTrue } from '../../src/features/message/messageSlice';
import { isCountingPaused } from '../../src/features/counting/countingSlice';
import MyStopwatch from './MyStopwatch'
import { useEffect, useRef } from 'react'
import Draggable from 'react-draggable'; 

function RecordingTab() {
    const isRecording = useSelector((state: any) => state.recording.value);
    const isCounting = useSelector((state: any) => state.counting.isCountingPaused);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const dispatch = useDispatch();
    const closePopUp = () => {
        dispatch(toggle())
    };

    function pauseRecording() {
        dispatch(isCountingPaused());
    }

    function stopRecording() {
        dispatch(toggle())
        dispatch(isMessageTrue())
        if (isCounting) {
            dispatch(isCountingPaused());
        }
    }
    
  return (
    <Draggable
    handle={window.innerWidth > 780 ? '.recording' : '.recording-time'}
    scale={1}>
        <div  style={{display: isRecording ? 'flex' : 'none'}} className='recording'>
            <div className='recording_inner'>
                <span className='recording-time recording_inner-rotate'>
                    <MyStopwatch runing={false}></MyStopwatch>
                </span>
                <span onClick={pauseRecording} className='control recording-pause recording_inner-rotate'>
                    <img src={isCounting ? PlayBtn : pauseBtn} alt=""/>
                </span>
                <span onClick={stopRecording} className='control recording-stop recording_inner-rotate'>
                <img  src={StopBtn} alt=""/>
                </span>
                <span onClick={closePopUp} className='control recording-close recording_inner-rotate'>
                    <img src={CloseBtn} alt=""/>
                </span>
            </div>
        </div>
    </Draggable>
  )
}

export default RecordingTab;