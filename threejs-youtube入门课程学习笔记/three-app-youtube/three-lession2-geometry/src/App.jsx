import { useEffect } from 'react'
import './App.css'
import * as THREE from 'three'
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import ThreeApp2 from './lib/threeapp'
function part1() {
  //创建three应用程序对象
  let threeApp = new ThreeApp2("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()
  let teapotGeo = new TeapotGeometry(0.5, 8)
  let teapotMaterial = new THREE.MeshNormalMaterial({ wireframe: true })
  let teapot = new THREE.Mesh(teapotGeo, teapotMaterial)
  teapot.position.x = 3
  threeApp.scene.add(teapot)
  //DecalGeometry
  let torusGeo = new THREE.TorusGeometry() //这个是threejs内置的几何体，不用额外导入
  let torusMaterial = new THREE.MeshNormalMaterial({ wireframe: true })
  let torus = new THREE.Mesh(torusGeo, torusMaterial)
  torus.rotation.x = Math.PI / 5
  torus.rotation.y = Math.PI / 6
  threeApp.scene.add(torus)

}
function part2() {
  //创建three应用程序对象
  let threeApp = new ThreeApp2("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()
  //定义着色器程序
  function vertexShader() {
    return `
      varying float z;
      uniform float u_time;
      void main(){
        z = (cos(position.y+u_time)+sin(position.x+u_time))/4.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x,position.y,z+position.z,1.0);
      }
    `;
  }
  function fragmentShader() {
    return `
      void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
      }
    `;
  }

  let bGeo = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1)
  let bMat = new THREE.ShaderMaterial({
    uniforms: threeApp.uniforms,
    fragmentShader: fragmentShader(),
    vertexShader: vertexShader(),
    wireframe: true
  })
  let box = new THREE.Mesh(bGeo, bMat)
  box.rotation.x = Math.PI / 2
  threeApp.scene.add(box)

}
function part3() {
  //创建three应用程序对象
  let threeApp = new ThreeApp2("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()
  let teapotGeo = new TeapotGeometry(0.5, 8)
  let teapotMaterial = new THREE.MeshNormalMaterial({ wireframe: true })
  let teapot = new THREE.Mesh(teapotGeo, teapotMaterial)
  teapot.position.x = 3
  threeApp.scene.add(teapot)
  //DecalGeometry
  let roundedBoxGeo = new RoundedBoxGeometry(1, 1, 1, 4, 0.1) //这个是threejs内置的几何体，不用额外导入
  let roundedBoxMaterial = new THREE.MeshNormalMaterial({ wireframe: true })
  let roundedBox = new THREE.Mesh(roundedBoxGeo, roundedBoxMaterial)
  threeApp.scene.add(roundedBox)

  function animate() {
    window.requestAnimationFrame(animate)
    roundedBox.rotation.x += 0.01
    roundedBox.rotation.y += 0.01
    teapot.rotateY(0.01)
    teapot.rotateZ(0.05)
  }
  animate()
}
function App() {
  useEffect(() => {
    // part1()
    // part2()
    part3()
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
