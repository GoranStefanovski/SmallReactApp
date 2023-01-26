import {useState} from 'react';
import './App.css';
import InfoChat from './_components/InfoChat';
import RecordingTab from './_components/RecordingTab';
import SendRecording from './_components/SendRecording';
import FinalStep from './_components/FinalStep';
import { useSelector } from 'react-redux'

const App = ( store: any) => {
  const isRecording = useSelector((state: any) => state.recording.value);
  const isSendMessage = useSelector((state: any) => state.message.value);
  const [isFinalStep, setItFinalStep] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <InfoChat></InfoChat>
        <RecordingTab></RecordingTab>
        { !isRecording && isSendMessage ? <SendRecording setItFinalStep={setItFinalStep}></SendRecording> : ''
        }
        { isFinalStep ? <FinalStep setItFinalStep={setItFinalStep}></FinalStep> : ''
        }
      </header>
    </div>
  );
}

export default App;
