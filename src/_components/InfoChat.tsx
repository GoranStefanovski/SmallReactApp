import React from 'react';
import info from '../assets/info.svg'
import { useState, useEffect } from 'react';
import closeBtn from '../../src/assets/black_close.svg';
import { toggle } from '../../src/features/recording/recordingSlice'
import { isMessage } from '../../src/features/message/messageSlice'
import { isCountdownActive } from '../../src/features/countdown/countdownSlice'
import { useSelector, useDispatch } from 'react-redux'

function InfoChat(props: any) {
  const isCountdown = useSelector((state: any) => state.countdown.value);
  const isCounting = useSelector((state: any) => state.counting.value);
  const isRecording = useSelector((state: any) => state.recording.value);
  const dispatch = useDispatch();
  var recordings = [
    { id: 1, text: 'Message with recording', state: 'Recording' },
    { id: 2, text: 'Message with audio only', state: 'Audio' },
    { id: 3, text: 'Message only', state: 'Message' },
  ];

  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [selectedValue, setIsselectedValue] = useState('Recordings');
  const [timer, setTimer] = useState(3);


  const OpenPopUp = () => {
    setIsPopUpShown(current => !current);
  };

  const closePopUp = () => {
    setIsPopUpShown(current => !current)
  }

  const OpenDropdown = () => {
    setIsDropdownShown(current => !current);
  };

  function startCountdown(text: any) {
    setIsselectedValue(text)
    setIsPopUpShown(current => !current);
    if (text === 'Message') {
      dispatch(isMessage());
    } else {
      dispatch(isCountdownActive());
      setIsDropdownShown(current => !current);
      setTimeout(() => {
        dispatch(toggle());
        dispatch(isCounting());
      }, 3000);
    }
  }

  useEffect(() => {
    if (isCountdown && timer > 0) {
      const intervalId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else if (!isCountdown) {
      setTimer(3);
      dispatch(isCountdownActive());
    }
  }, [isCountdown, timer]);


  function ListItem(rec: any) {
    return <li onClick={() => startCountdown(rec.value)} value={rec.id} key={rec.id}>
      {rec.text}
    </li>
  }

  const listItems = recordings.map((object) =>
    <ListItem key={object.text.toString()} value={object.state} text={object.text} />
  );

  return (
    <div className={isRecording ? '' : 'infoChat'}>
      <span style={{ display: !isPopUpShown ? 'none' : 'flex' }} className="infoChat_popup-modal">
        <span className='infoChat_popup infoChat_popup-modal_inner'>
          <h3 className='infoChat_popup-title'>
            Having an issue? Send <br className='infoChat_popup-title-break'></br> us a recording of it!
          </h3>
          <div>
            <span onClick={OpenDropdown}>
              <span className='infoChat_popup-dropdown'>{selectedValue}</span>
              <span className={!isDropdownShown ? 'infoChat_popup-dropdown-opened' : 'infoChat_popup-dropdown-closed'}></span>
            </span>
            <span className='infoChat_popup_modal-close'><img onClick={closePopUp} src={closeBtn} alt="" /></span>
            <ul className='infoChat_popup-list'>
              {!isDropdownShown ? listItems : ''}
            </ul>
            {isPopUpShown ? <div className='infoChat_popup-list-md-wrap'>
              <ul className='infoChat_popup-list-md'>
                {listItems}
              </ul>
            </div> : ''}
          </div>
        </span>
      </span>
      <img style={{ display: isRecording ? 'none' : 'flex' }} onClick={OpenPopUp} src={info} className="" alt="Info Icon" />
      <div style={{ display: !isCountdown || timer === 0 ? 'none' : 'flex' }} className="countdown">
        <div className='countdown_inner'>
          {timer}
        </div>
      </div>
    </div>
  );
}

export default InfoChat;
