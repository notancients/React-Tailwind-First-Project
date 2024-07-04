import { ChangeEvent, useRef } from 'react'

function LoginSignup() {
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
    <div id='container' className='flex bg-asparagus h-screen w-screen'>

    </div>
    </>
  )
}


export default LoginSignup
