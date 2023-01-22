import React from 'react';
import info from '../info.svg'

function App() {
  var recordings = [
    {id: 1, text: 'Message with recording', value: 'Recording'},
    {id: 2, text: 'Message with audio only', value: 'Audio'},
    {id: 3, text: 'Message only', value: 'Message'},
  ];
  return (
    <div className='infoChat'>
        <span className='infoChat_popup'>
            <h3 className='infoChat_popup-title'>
              Having an issue? Send <br className='infoChat_popup-title-break'></br> us a recording of it!
            </h3>
            <div>
              <input className='infoChat_popup-dropdown' type="text" readOnly />
               <ul className='infoChat_popup-list'>
               {recordings.map((rec) => (
                  <li key={rec.id}>
                    {rec.text}
                  </li>
                ))}
              </ul> 
            </div>
        </span>
        <img src={info} className="" alt="Info Icon" />
    </div>
  );
}

export default App;
