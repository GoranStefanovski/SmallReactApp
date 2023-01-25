import placeholder from '../assets/placeholderImg.svg'

function SendRecording(props: any) {
  function sendMessage() {
    props.setItFinalStep(true)
  }
  return (  
    <div className='countdown'>
        <div className='send_rec-inner'>
            <img src={placeholder} alt="Placeholder"/>
            <textarea placeholder="Please write a message"/>
            <button onClick={sendMessage} className='send_rec-inner_btn'>Send</button>
        </div>
    </div>
  )
}

export default SendRecording