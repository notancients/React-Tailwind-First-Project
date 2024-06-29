import { ChangeEvent, useRef, useState } from 'react'

function Homepage() {
  // const [count, setCount] = useState(0)
  // let applicationName: string = 'Application';

  let usernameRef = useRef("");
  let passwordRef = useRef("");

  function handleLogin() {
    console.log("User logging in.");
  }

  function handleTextChange(e: ChangeEvent<HTMLInputElement>, type: string) {
    switch(type) {
      case 'username':
        usernameRef.current = e.target.value
        break;
      case 'password':
        passwordRef.current = e.target.value;
        break;
    }
  }

  return (
    <>
    <div className='flex justify-center items-center bg-asparagus h-screen w-screen p-4'>
    <div className='grid grid-cols-3 h-full w-full'>
      <div className='flex items-center justify-center'>
        <span>Welcome to Chatterbox!</span>
      </div>
      <div className='bg-red-300 col-span-2 flex flex-col justify-center items-center'>
        <div className='h-4/5 w-2/3 bg-yellow-200 flex flex-col items-center justify-center'>
          <div className='flex flex-col items-start p-3'>
            <span className='text-gray-700 text-xs'>Email or username</span>
            <input type='text' onChange={(e) => { handleTextChange(e, 'username')}}></input>
          </div>
          <div className='flex flex-col items-start'>
            <span className='text-gray-700 text-xs'>Password</span>
            <input type='password' onChange={(e) => { handleTextChange(e, 'password')}}></input>
          </div>
          <div id="login-button" onClick={() => handleLogin()} className='flex items-center justify-center bg-blue-400 hover:bg-blue-700 text-white rounded-full mt-4 h-8 w-14'>Login</div>
          <div id="sign-up-link" className='text-gray-500 text-xs mt-1 hover:text-gray-800'>Not yet a user? Sign up</div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

function TwoColumnGridSpan() {
  return(
    <>
    <div className='flex justify-center items-center bg-blue-400 h-screen w-screen p-4'>
    <div className='grid grid-cols-3 h-full w-full'>
      <div className='flex items-center justify-center'>
        <span>Welcome to !</span>
      </div>
      <div className='bg-red-300 col-span-2'>Text 2</div>
    </div>
    </div>
    </>
  )
}

function SampleScreen() {
  return(
    <>
    <div className="flex flex-col h-screen w-screen">
    <header className="bg-blue-500 p-4 flex items-center justify-between">Header</header>
    <div className="flex flex-1">
      <aside className="bg-gray-200 w-64 p-4">Sidebar</aside>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-red-500 p-4">Grid Item 1</div>
          <div className="bg-green-500 p-4">Grid Item 2</div>
          <div className="bg-blue-500 p-4">Grid Item 3</div>
          <div className="bg-yellow-500 p-4">Grid Item 4</div>
          <div className="bg-purple-500 p-4">Grid Item 5</div>
          <div className="bg-pink-500 p-4">Grid Item 6</div>
        </div>
      </main>
    </div>
    <footer className="bg-blue-500 p-4">Footer</footer>
    </div>
    </>
  )
}

function  ThreeColumnsFlex() {
  return(
    <>
    <div className='flex flex-row justify-center items-center bg-blue-300 h-screen w-screen p-2 box-border'>{/* Container */}
      <div className='flex justify-center items-center bg-red-500 w-full h-full m-2'>
        <span>Welcome to the Application!</span>
      </div>
      <div className='bg-red-500 w-full h-7 m-2'></div>
      <div className='bg-red-500 w-full h-7 m-2'></div>
    </div> {/* End ofContainer */}
    </> 
  )
}

function AuthButtons() {
  return(
  <>
    <div className='flex p-2 bg-red-300 w-40 justify-between items-center'> {/* Login */}
    <span className='p-1 border-2 border-black hover:bg-green-500'>Login</span>
    <span className='p-1 border-2 border-black'>Sign Up</span>
  </div> {/* End of Login */}
  </>
  )
}

export default Homepage
