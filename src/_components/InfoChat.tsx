import React from 'react';
import info from '../assets/info.svg'
import {useState, useEffect} from 'react';
import closeBtn from '../../src/assets/black_close.svg';

function InfoChat(props : any) {
  var dropdownClass = '';
  var recordings = [
    {id: 1, text: 'Message with recording', state: 'Recording'},
    {id: 2, text: 'Message with audio only', state: 'Audio'},
    {id: 3, text: 'Message only', state: 'Message'},
  ];

  const [isPopUpShown, setIsPopUpShown] = useState(true);
  const [isDropdownShown, setIsDropdownShown] = useState(true);
  const [selectedValue, setIsselectedValue] = useState('Recordings');
  const [isCountdownShown, setIsCountdownShown] = useState(false);
  const [timer, setTimer] = useState(3);


  const OpenPopUp = () => {
    setIsPopUpShown(current => !current);
  };

  const closePopUp = () => {
    setIsPopUpShown(current => !current)
  }

  const OpenDropdown = () => {
    setIsDropdownShown(current => !current);
    dropdownClass = 'infoChat_popup-dropdown-open'
  };

  function startCountdown(text: any) {
    setIsselectedValue(text)
    setIsPopUpShown(current => !current);
    setIsDropdownShown(current => !current);
    setIsCountdownShown(current => !current);
    setTimeout(() => {
      props.setIsRecording(true);
    }, 3000);
    dropdownClass = '';
  }

  useEffect(() => {
    if (isCountdownShown && timer > 0) {
      const intervalId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (!isCountdownShown) {
      setTimer(3);
    }
  }, [isCountdownShown, timer]);

  
  function ListItem(rec : any) {
    return  <li onClick={() => startCountdown(rec.value)} value={rec.id} key={rec.id}>
      {rec.text} 
    </li>
  }

  const listItems = recordings.map((object) =>
    <ListItem key={object.text.toString()} value={object.state} text={object.text}/>
  );

  return (
    <div className='infoChat'>
      <span style={{display: isPopUpShown ? 'none' : 'flex'}} className="infoChat_popup-modal">
        <span className='infoChat_popup infoChat_popup-modal_inner'>
            <h3 className='infoChat_popup-title'>
              Having an issue? Send <br className='infoChat_popup-title-break'></br> us a recording of it!
            </h3>
            <div>
              <input value={selectedValue} onClick={OpenDropdown} className={'infoChat_popup-dropdown ' + dropdownClass} type="text" readOnly />
               <span className='infoChat_popup_modal-close'><img onClick={closePopUp} src={closeBtn} alt="" /></span>
              <ul className='infoChat_popup-list'>
                {isDropdownShown ? listItems : ''}
              </ul>
              <ul className='infoChat_popup-list-md'>
                {!isPopUpShown ? listItems : ''}
              </ul> 
            </div>
        </span>
      </span>
      <img onClick={OpenPopUp} src={info} className="" alt="Info Icon" />
      <div style={{display: isDropdownShown || timer === 0 ? 'none' : 'flex'}} className="countdown">
        <div className='countdown_inner'>
          {timer}
        </div>
      </div>
    </div>
  );
}

export default InfoChat;
