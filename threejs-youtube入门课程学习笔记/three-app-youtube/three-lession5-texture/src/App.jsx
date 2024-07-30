import { useEffect } from 'react'
import './App.css'
import * as THREE from 'three'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'
import ThreeApp from './lib/threeapp'
function loadTextures(app) {
  let brickTexture = new THREE.TextureLoader().load('../assets/brick.jpeg')
  let crateTexture = new THREE.TextureLoader().load('../assets/crate.png')
  let earthTexture = new THREE.TextureLoader().load('../assets/earth.jpeg')
  let uvTexture = new THREE.TextureLoader().load('../assets/uv.png')
  let uvTexture2 = new THREE.TextureLoader().load('../assets/uv.jpeg')
  app.brickTexture = brickTexture
  app.crateTexture = crateTexture
  app.earthTexture = earthTexture
  app.uvTexture = uvTexture
  app.uvTexture2 = uvTexture2
}
function main1() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()

  //给场景添加背景纹理
  loadTextures(threeApp)
  //加载其他纹理图片

  //创建一个立方体，并且贴图
  let box1Geo = new THREE.BoxGeometry(15, 15, 15)
  let box1Mat = new THREE.MeshStandardMaterial({
    map: threeApp.brickTexture
  })
  let box1 = new THREE.Mesh(box1Geo, box1Mat)
  box1.rotation.y = Math.PI / 4
  box1.rotation.x = Math.PI / 8
  threeApp.scene.add(box1)

}
function main2() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()

  //给场景添加背景纹理
  loadTextures(threeApp)
  //加载其他纹理图片

  //创建一个立方体，并且贴图
  let box1Geo = new THREE.BoxGeometry(7, 7, 7)
  let box1Mat = new THREE.MeshStandardMaterial({
    map: threeApp.crateTexture
  })
  let box1 = new THREE.Mesh(box1Geo, box1Mat)
  box1.rotation.y = Math.PI / 4
  box1.rotation.x = Math.PI / 8
  box1.position.x = -9;
  box1.position.y = -5;
  threeApp.scene.add(box1)

  let box2Geo = new THREE.BoxGeometry(7, 7, 7)
  let box2Mat = new THREE.MeshStandardMaterial({
    map: threeApp.uvTexture2
  })
  let box2 = new THREE.Mesh(box2Geo, box2Mat)
  box2.position.x = 9;
  box2.position.y = -3;
  threeApp.scene.add(box2)
  //球体
  let sp1Geo = new THREE.SphereGeometry(4)
  let sp1Mat = new THREE.MeshStandardMaterial({
    map: threeApp.earthTexture
  })
  let sphere = new THREE.Mesh(sp1Geo, sp1Mat)
  sphere.position.x = -9
  sphere.position.y = 5
  threeApp.scene.add(sphere)

  let sp2Geo = new THREE.SphereGeometry(4)
  let sp2Mat = new THREE.MeshStandardMaterial({
    map: threeApp.brickTexture
  })
  let sphere2 = new THREE.Mesh(sp2Geo, sp2Mat)
  sphere2.position.x = 9
  sphere2.position.y = 5
  threeApp.scene.add(sphere2)

}

function App() {
  useEffect(() => {
    // main1()
    main2()
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
