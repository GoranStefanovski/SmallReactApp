import pauseBtn from '../../src/assets/Pause.svg'
import StopBtn from '../../src/assets/Stop.svg'
import CloseBtn from '../../src/assets/Close.svg'


function RecordingTab(props:any) {
    const closePopUp = () => {
        props.setIsRecording(false);
        props.setIsRecordingDone(true);
    };

    function pauseRecording() {
        console.log('pause recording')
    }

    function stopRecording() {
        props.setIsRecording(false);
        props.setIsRecordingDone(true);
    }
    
  return (
    <div style={{display: props.isRecActive ? 'flex' : 'none'}} className='recording'>
        <div className='recording_inner'>
        <span className='recording-time'>
            00:00
        </span>
        <span onClick={pauseRecording} className='control recording-pause'>
            <img src={pauseBtn} alt=""/>
        </span>
        <span onClick={stopRecording} className='control recording-stop'>
        <img  src={StopBtn} alt=""/>
        </span>
        <span onClick={closePopUp} className='control recording-close'>
            <img src={CloseBtn} alt=""/>
        </span>
        </div>
    </div>
  )
}

export default RecordingTab;