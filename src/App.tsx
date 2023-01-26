import {useState} from 'react';
import './App.css';
import InfoChat from './_components/InfoChat';
import RecordingTab from './_components/RecordingTab';
import SendRecording from './_components/SendRecording';
import FinalStep from './_components/FinalStep';

import { toggle } from '../src/features/recording/recordingSlice'
import { useSelector, useDispatch } from 'react-redux'

const App = ( store: any) => {
  const count = useSelector((state: any) => state.recording.value)
  const dispatch = useDispatch()
  const [IsRecording, setIsRecording] = useState(false);
  const [IsRecordingDone, setIsRecordingDone] = useState(false);
  const [isFinalStep, setItFinalStep] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <InfoChat isRecActive={IsRecording} setIsRecording={setIsRecording}></InfoChat>
        <RecordingTab isRecActive={IsRecording} setIsRecording={setIsRecording} setIsRecordingDone={setIsRecordingDone}></RecordingTab>
        { IsRecordingDone ? <SendRecording isRecDone={IsRecordingDone} setIsRecordingDone={setIsRecordingDone} setItFinalStep={setItFinalStep}></SendRecording> : ''
        }
        { isFinalStep ? <FinalStep setItFinalStep={setItFinalStep} setIsRecordingDone={setIsRecordingDone}></FinalStep> : ''
        }
      </header>
    </div>
  );
}

export default App;
