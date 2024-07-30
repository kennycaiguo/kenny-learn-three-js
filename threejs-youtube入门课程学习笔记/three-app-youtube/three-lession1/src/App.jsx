import { useEffect } from 'react'
import './App.css'
import * as THREE from 'three'
import ThreeApp from './lib/threeapp'

function App() {
  useEffect(() => {
    //创建three应用程序对象
    let threeApp = new ThreeApp("myThreeJSCanvas")
    //初始化场景
    threeApp.initApp()
    //调用动画渲染效果
    threeApp.animate()
    //创建一个立方体并且添加到创建
    let boxGeo = new THREE.BoxGeometry(16, 16, 16)
    let material = new THREE.MeshNormalMaterial()
    let cube = new THREE.Mesh(boxGeo, material)
    threeApp.scene.add(cube)

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
