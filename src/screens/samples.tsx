
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