import { useEffect } from 'react'
import './App.css'
import * as THREE from 'three'
import ThreeApp from './lib/threeapp'


function main1() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()


  let boxGeo = new THREE.BoxGeometry(16, 16, 16, 16, 16, 16)
  let boxMat = new THREE.ShaderMaterial({
    wireframe: true,
    vertexShader: `
       void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(
          position.x,position.y,position.z,1.0
        );

       }
    `,
    fragmentShader: `
      void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
      }
    `
  })
  let box = new THREE.Mesh(boxGeo, boxMat)
  threeApp.scene.add(box)

}
function main2() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()


  let boxGeo = new THREE.BoxGeometry(16, 16, 16, 16, 16, 16)
  let boxMat = new THREE.ShaderMaterial({
    wireframe: true,
    vertexShader: `
       void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(
          position.x,sin(position.z),position.z,1.0
        );

       }
    `,
    fragmentShader: `
      void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
      }
    `
  })
  let box = new THREE.Mesh(boxGeo, boxMat)
  threeApp.scene.add(box)


}
function main3() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()


  let boxGeo = new THREE.BoxGeometry(16, 16, 16, 16, 16, 16)
  let boxMat = new THREE.ShaderMaterial({
    wireframe: true,
    vertexShader: `
       void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(
          position.x,sin(position.z)+position.y,position.z,1.0
        );

       }
    `,
    fragmentShader: `
      void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
      }
    `
  })
  let box = new THREE.Mesh(boxGeo, boxMat)
  threeApp.scene.add(box)


}
function main4() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()


  let boxGeo = new THREE.BoxGeometry(16, 16, 16, 16, 16, 16)
  let boxMat = new THREE.ShaderMaterial({
    wireframe: true,
    vertexShader: `
       void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, 4.0*sin(position.z/4.0) + position.y, position.z, 1.0);
       }
    `,
    fragmentShader: `
      void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
      }
    `
  })
  let box = new THREE.Mesh(boxGeo, boxMat)
  threeApp.scene.add(box)

}
function main5() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()


  let boxGeo = new THREE.BoxGeometry(16, 16, 16, 16, 16, 16)
  let boxMat = new THREE.ShaderMaterial({
    wireframe: true,
    vertexShader: `
       void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(
          sin(position.x),position.y,position.z,1.0
        );

       }
    `,
    fragmentShader: `
      void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
      }
    `
  })
  let box = new THREE.Mesh(boxGeo, boxMat)
  threeApp.scene.add(box)



}
function main6() {
  //创建three应用程序对象
  let threeApp = new ThreeApp("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()


  let boxGeo = new THREE.BoxGeometry(16, 16, 16, 16, 16, 16)
  let boxMat = new THREE.ShaderMaterial({
    wireframe: true,
    vertexShader: `
       void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(
          sin(position.z)+position.x,position.y,position.z,1.0
        );

       }
    `,
    fragmentShader: `
      void main(){
        gl_FragColor = vec4(1.0,0.0,0.0,1.0);
      }
    `
  })
  let box = new THREE.Mesh(boxGeo, boxMat)
  threeApp.scene.add(box)

}


function App() {
  useEffect(() => {
    main1()
    // main2()
    // main3()
    // main4()
    // main5()
    // main6()
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
