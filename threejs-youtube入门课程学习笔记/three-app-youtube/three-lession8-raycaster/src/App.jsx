import { useEffect } from 'react'
import './App.css'
import {GLTFLoader}from './lib/addonutil'
import * as THREE from 'three'
import ThreeApp from './lib/threeapp'



function main1() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()

  let addNewBoxMesh = (x, y, z) => {
    let boxGeo = new THREE.BoxGeometry(1, 1, 1)
    let boxMat = new THREE.MeshPhongMaterial({ color: 0xfafafa })
    let box = new THREE.Mesh(boxGeo, boxMat)
    box.position.x = x
    box.position.y = y
    box.position.z = z
    threeApp.scene.add(box)
  }

  // top rows
  addNewBoxMesh(0, 2, 0);
  addNewBoxMesh(2, 2, 0);
  addNewBoxMesh(-2, 2, 0);
  addNewBoxMesh(0, 2, -2);
  addNewBoxMesh(2, 2, -2);
  addNewBoxMesh(-2, 2, -2);
  addNewBoxMesh(0, 2, 2);
  addNewBoxMesh(2, 2, 2);
  addNewBoxMesh(-2, 2, 2);

  // middle rows
  addNewBoxMesh(0, 0, 0);
  addNewBoxMesh(2, 0, 0);
  addNewBoxMesh(-2, 0, 0);
  addNewBoxMesh(0, 0, -2);
  addNewBoxMesh(2, 0, -2);
  addNewBoxMesh(-2, 0, -2);
  addNewBoxMesh(0, 0, 2);
  addNewBoxMesh(2, 0, 2);
  addNewBoxMesh(-2, 0, 2);

  // bottom rows
  addNewBoxMesh(0, -2, 0);
  addNewBoxMesh(2, -2, 0);
  addNewBoxMesh(-2, -2, 0);
  addNewBoxMesh(0, -2, -2);
  addNewBoxMesh(2, -2, -2);
  addNewBoxMesh(-2, -2, -2);
  addNewBoxMesh(0, -2, 2);
  addNewBoxMesh(2, -2, 2);
  addNewBoxMesh(-2, -2, 2);


  let loadedModel
  // let gltfLoader = new AddOn.GLTFLoader()
  let gltfLoader = new GLTFLoader()
  gltfLoader.load('../assets/shiba/scene.gltf', (gltfScene) => {
    loadedModel = gltfScene
    gltfScene.scene.position.y = 0.5
    gltfScene.scene.position.z = 4
    gltfScene.scene.scale.set(1, 1, 1)
    threeApp.scene.add(gltfScene.scene)

  })
  //光线拾取操作
  let pointer = new THREE.Vector2()
  let raycaster = new THREE.Raycaster()
  function onMouse(event) {
    console.log(event);
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(pointer, threeApp.camera)
    //intersects
    let intersects = raycaster.intersectObjects(threeApp.scene.children)
    if (intersects.length > 0) {
      intersects[0].object.material.color.set(0xff0000)
    }

  }


  //添加鼠标移动事件监听
  window.addEventListener('mousemove', onMouse)
  // function animate() {
  //   if (loadedModel) {
  //     loadedModel.scene.rotation.x += 0.01
  //     loadedModel.scene.rotation.y += 0.01
  //     loadedModel.scene.rotation.z += 0.01
  //   }
  //   requestAnimationFrame(animate);
  // }
  // animate()
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
