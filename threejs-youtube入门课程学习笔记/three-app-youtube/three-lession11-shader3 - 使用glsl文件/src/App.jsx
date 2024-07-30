import { useEffect } from 'react'
import './App.css'
import { shaderTest1a } from './shadertests/test1/shadertest1_a'
import { shaderTest1b } from './shadertests/test1/shadertest1_b'
import { shaderTest2a } from './shadertests/test2/shadertest2_a'
import { shaderTest2b } from './shadertests/test2/shadertest2_b'


function App() {
  useEffect(() => {
    shaderTest1a()
    // shaderTest1b()
    // shaderTest2a()
    // shaderTest2b()
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
