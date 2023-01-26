import pauseBtn from '../../src/assets/Pause.svg'
import StopBtn from '../../src/assets/Stop.svg'
import CloseBtn from '../../src/assets/Close.svg'


function RecordingTab(props:any) {
    const closePopUp = () => {
        props.setIsRecording(false);
        props.setIsRecordingDone(true);
    };

    function pauseRecording() {
    }

    function stopRecording() {
        props.setIsRecording(false);
        props.setIsRecordingDone(true);
    }
    
  return (
    <div style={{display: props.isRecActive ? 'flex' : 'none'}} className='recording'>
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