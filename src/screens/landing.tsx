import { useState, useRef, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {

  let interests = useRef('');
  let navigate = useNavigate();

  function handleInterestChange(event: ChangeEvent<HTMLInputElement>) {
    interests.current = event.target.value;
    console.log(interests.current);
  }

  function handleStartChatting() {
    let parsedInterests: string [];
    parsedInterests = (interests.current.split(',')).map(word => word.trim());
  }

  function handleSignup() {
    navigate('/login')
  }

  return(
  <>
  <div className='h-screen w-screen bg-asparagus'>
  <div className='flex flex-col items-center justify-between h-full w-full p-5'>

    <div className="flex-1"> {/* Title */}
      <span>Welome to Tamb!</span>
    </div>

    <div className="flex flex-col items-center p-2 gap- w-full"> {/* Inputs */}
      <div> {/* Interests */}
        <input type="text" onChange={e => handleInterestChange(e)} className='bg-white bg-transparent rounded-md'/>
      </div>
      <div className="flex flex-row p-2 gap-3"> {/* Buttons*/}
        <div id='start-chatting' onClick={() => handleStartChatting()} className="flex h-10 items-center justify-center bg-blue-800 p-3 text-white rounded-lg hover:bg-blue-900">Start Chatting</div>
        <div id='login' onClick={() => handleSignup()} className="flex h-10 items-center justify-center bg-blue-800 p-3 text-white rounded-lg hover:bg-blue-900">Sign Up</div>
      </div>
    </div> 

    <div className="flex justify-center w-full">   {/* Boilerplate */}
      <span>Please do not share any sensitive information!</span>
    </div> 
  </div>
  </div>
  </>
  )
}

export default Landing;