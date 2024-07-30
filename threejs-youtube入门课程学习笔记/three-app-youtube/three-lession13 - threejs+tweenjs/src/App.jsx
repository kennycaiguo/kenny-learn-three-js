import { useEffect } from 'react'
import './App.css'
import { appFunc1 } from './appFuncs/appfunc1'
import { appFunc2 } from './appFuncs/appfunc2'
import { appFunc3 } from './appFuncs/appfunc3'
import { appFunc4 } from './appFuncs/appfunc4'
import { appFunc5 } from './appFuncs/appfunc5'
import { appFunc6 } from './appFuncs/appfunc6'
import { appFunc7 } from './appFuncs/appfunc7'
import { appFunc8 } from './appFuncs/appfunc8'



function App() {
  useEffect(() => {
    let canvas = document.getElementById("myThreeJSCanvas") //在外面创建canvas
    // appFunc1(canvas)
    // appFunc2(canvas)
    // appFunc3(canvas)
    // appFunc4(canvas)
    // appFunc5(canvas)
    // appFunc6(canvas)
    // appFunc7(canvas)
    appFunc8(canvas)

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
