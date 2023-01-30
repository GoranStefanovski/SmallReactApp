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


function RecordingTab() {
    const isRecording = useSelector((state: any) => state.recording.value)
    const isCounting = useSelector((state: any) => state.counting.isCountingPaused)
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

    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
  
    const isClicked = useRef<boolean>(false);
  
    const coords = useRef<{
      startX: number,
      startY: number,
      lastX: number,
      lastY: number
    }>({
      startX: 150,
      startY: 150,
      lastX: 150,
      lastY: 150
    })
  
    useEffect(() => {
      if (!boxRef.current || !containerRef.current) return;
  
      const box = boxRef.current;
      const container = containerRef.current;
  
  
      const onMouseDown = (e: MouseEvent) => {
        isClicked.current = true;
        coords.current.startX = e.clientX;
        coords.current.startY = e.clientY;
      }
  
      const onMouseUp = (e: MouseEvent) => {
        isClicked.current = false;
        coords.current.lastX = box.offsetLeft;
        coords.current.lastY = box.offsetTop;
      }
  
      const onMouseMove = (e: MouseEvent) => {
        if (!isClicked.current) return;
  
        const nextX = e.clientX - coords.current.startX + coords.current.lastX;
        const nextY = e.clientY - coords.current.startY + coords.current.lastY;
  
        box.style.top = `${nextY}px`;
        box.style.left = `${nextX}px`;
      }
  
      box.addEventListener('mousedown', onMouseDown);
      box.addEventListener('mouseup', onMouseUp);
      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseleave', onMouseUp);
  
      const cleanup = () => {
        box.removeEventListener('mousedown', onMouseDown);
        box.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseleave', onMouseUp);
      }
  
      return cleanup;
    }, [])
    
  return (
    <div ref={containerRef} className="container">
        <div ref={boxRef} style={{display: isRecording ? 'flex' : 'none'}} className='recording'>
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
    </div>
  )
}

export default RecordingTab;