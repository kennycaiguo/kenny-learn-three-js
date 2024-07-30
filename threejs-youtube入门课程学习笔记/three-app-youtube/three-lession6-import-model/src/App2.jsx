import { useEffect } from 'react'
import './App.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function App() {
  useEffect(() => {
    //创建场景
    let scene = new THREE.Scene()
    //创建相机
    let camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 96
    //获取画布
    let canvas = document.getElementById('myThreeJSCanvas')
    //利用画布创建渲染对象
    let renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    })
    //把渲染器添加到body中
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    //创建环境光
    let amientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(amientLight)
    //创建方向光
    let directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(0, 32, 64)
    scene.add(directionalLight)
    let cubeGeo = new THREE.BoxGeometry(16, 16, 16)
    let material = new THREE.MeshNormalMaterial()
    let cube = new THREE.Mesh(cubeGeo, material)
    scene.add(cube)
    let control = new OrbitControls(camera, renderer.domElement)
    function animate() {
      window.requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
      control.update()
    }
    animate()
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(window.devicePixelRatio)
    })
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
