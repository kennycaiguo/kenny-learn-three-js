import { useEffect } from 'react'
import './App.css'
import * as THREE from 'three'
import {FontLoader,TextGeometry,TTFLoader} from './lib/addonutil'
import ThreeApp from './lib/threeapp'

//main1
function main1() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()

  //text1

  let fontLoader = new FontLoader()

  fontLoader.load(
    'node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',
    (droidFont) => {
      let textGeometry = new TextGeometry('Threejs', {
        size: 20,
        height: 4,
        font: droidFont
      })
      let textMaterial = new THREE.MeshNormalMaterial()
      let text = new THREE.Mesh(textGeometry, textMaterial)
      text.position.x = -45
      text.position.y = 0
      threeApp.scene.add(text)

    })

  //text2,ttfLoader

  let ttfLoader = new TTFLoader()
  ttfLoader.load('../fonts/jet_brains_mono_regular.ttf', (json) => {
    //注意ttfLoader需要调用fontLoader的parse功能
    let jet_brains_font = fontLoader.parse(json)
    let textGeometry2 = new TextGeometry('Hello People', {
      size: 4,
      height: 10,
      font: jet_brains_font
    })
    let textMaterial2 = new THREE.MeshNormalMaterial()
    let textMesh = new THREE.Mesh(textGeometry2, textMaterial2)
    textMesh.position.x = -46
    textMesh.position.y = 10
    textMesh.name = 'text2'
    threeApp.scene.add(textMesh)
  })


  function animate() {

    requestAnimationFrame(animate);
  }
  animate()
}

async function createFont(loader) {
  let font = await new Promise((resolve, reject) => {
    loader.load(
      'node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json',
      (droidFont) => {
        resolve(droidFont)
      })
  })
  return font
}


async function getTTFFont(ttfLoader, fontLoader) {
  let font = await new Promise((resolve, reject) => {
    ttfLoader.load('../fonts/jet_brains_mono_regular.ttf', (json) => {
      //注意ttfLoader需要调用fontLoader的parse功能
      let jet_brains_font = fontLoader.parse(json)
      resolve(jet_brains_font)
    })
  })
  return font
}


//main2
async function main2() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()

  //text1

  // let fontLoader = new AddOn.FontLoader()
  let fontLoader =new FontLoader()
  let font1 = await createFont(fontLoader)
  let textGeometry = new TextGeometry('Threejs', {
    size: 20,
    height: 4,
    font: font1
  })
  let textMaterial = new THREE.MeshNormalMaterial()
  let text = new THREE.Mesh(textGeometry, textMaterial)
  text.position.x = -45
  text.position.y = 0
  threeApp.scene.add(text)
  //text2,ttfLoader

  // let ttfLoader = new AddOn.TTFLoader()
  let ttfLoader = new TTFLoader()
  let ttfFont = await getTTFFont(ttfLoader, fontLoader)
  let textGeometry2 = new TextGeometry('Hello People', {
    size: 4,
    height: 10,
    font: ttfFont
  })
  let textMaterial2 = new THREE.MeshNormalMaterial()
  let textMesh = new THREE.Mesh(textGeometry2, textMaterial2)
  textMesh.position.x = -46
  textMesh.position.y = 10
  textMesh.name = 'text2'
  threeApp.scene.add(textMesh)


  function animate() {
    textMesh.rotation.x += 0.01
    textMesh.rotation.y += 0.01
    requestAnimationFrame(animate);
  }
  animate()
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
