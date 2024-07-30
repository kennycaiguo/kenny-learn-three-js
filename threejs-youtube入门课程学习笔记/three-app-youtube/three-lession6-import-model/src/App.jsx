import { useEffect } from 'react'
import './App.css'
import {GLTFLoader} from './lib/addonutil'
import ThreeApp from './lib/threeapp'


function main1() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()

  let loadedModel
  let gltfLoader = new GLTFLoader()
  gltfLoader.load('../assets/shiba/scene.gltf', (gltfScene) => {
    loadedModel = gltfScene
    gltfScene.scene.rotation.y = Math.PI / 8
    gltfScene.scene.position.y = 3
    gltfScene.scene.scale.set(10, 10, 10)
    threeApp.scene.add(gltfScene.scene)

  })

  function animate() {
    if (loadedModel) {
      loadedModel.scene.rotation.x += 0.01
      loadedModel.scene.rotation.y += 0.01
      loadedModel.scene.rotation.z += 0.01
    }
    requestAnimationFrame(animate);
  }
  animate()
}

function App() {
  useEffect(() => {
    main1()

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
