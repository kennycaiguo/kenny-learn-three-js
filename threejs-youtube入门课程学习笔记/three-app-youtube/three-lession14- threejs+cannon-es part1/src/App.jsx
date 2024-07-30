import { useEffect } from 'react'
import './App.css'
import { appFunc1 } from './appFuncs/appfunc1'
import { appFunc2 } from './appFuncs/appfunc2'
import { appFunc3 } from './appFuncs/appfunc3'





function App() {
  useEffect(() => {
    let canvas = document.getElementById("myThreeJSCanvas") //在外面创建canvas
    appFunc1(canvas)
    // appFunc2(canvas)
    // appFunc3(canvas)



  }, [])

  return (
    <>
      <div>
        <canvas id="myThreeJSCanvas"></canvas>
      </div>

    </>
  )
}

export default App
