import {useState} from 'react';
import './App.css';
import InfoChat from './_components/InfoChat';
import RecordingTab from './_components/RecordingTab';
import SendRecording from './_components/SendRecording';
import FinalStep from './_components/FinalStep';



const App = ( store: any) => {

  const [IsRecordingDone, setIsRecordingDone] = useState(false);
  const [isFinalStep, setItFinalStep] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <InfoChat></InfoChat>
        <RecordingTab setIsRecordingDone={setIsRecordingDone}></RecordingTab>
        { IsRecordingDone ? <SendRecording isRecDone={IsRecordingDone} setIsRecordingDone={setIsRecordingDone} setItFinalStep={setItFinalStep}></SendRecording> : ''
        }
        { isFinalStep ? <FinalStep setItFinalStep={setItFinalStep} setIsRecordingDone={setIsRecordingDone}></FinalStep> : ''
        }
      </header>
    </div>
  );
}

export default App;
