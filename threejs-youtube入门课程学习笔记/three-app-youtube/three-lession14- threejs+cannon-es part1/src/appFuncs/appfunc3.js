import * as THREE from 'three'
import ThreeApp from '../lib/threeapp2'
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'

export function appFunc3(canvas){
  let threeApp = new ThreeApp(canvas)
  threeApp.initApp()
  threeApp.animate()
  
  let axesHelper = new THREE.AxesHelper(8)
  threeApp.scene.add(axesHelper)
  
  //利用CANNON库创建物理世界
  let physicsWorld = new CANNON.World({
    gravity: new CANNON.Vec3(0,-9.82,0)
  })
  // create a ground body with a static plane
  let groundBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane()
  })
  // create a ground body with a static plane
  groundBody.quaternion.setFromEuler(-Math.PI/2,0,0)
  physicsWorld.addBody(groundBody)
  //创建一个球体并且添加到物理世界
  let radius=1
  let sphere = new CANNON.Body({
      mass:5,
      shape: new CANNON.Sphere(radius)
  })
  //设置球体的位置
  sphere.position.set(0,7,0)
  physicsWorld.addBody(sphere)

  // bind cannon debugger to the three.js scene + physics world
  let cannonDebugger = new CannonDebugger(threeApp.scene,physicsWorld,{

  })

  // combine the three.js game world with the physics world
  let geo = new THREE.SphereGeometry(radius)
  let spMat = new THREE.MeshNormalMaterial()
  let sp = new THREE.Mesh(geo,spMat)
  threeApp.scene.add(sp)

  //添加一个立方体
    let cannonBox = new CANNON.Body({
       mass:5,
       shape: new CANNON.Box(new CANNON.Vec3(1,1,1))
    })
    cannonBox.position.set(0,10,0)
    physicsWorld.addBody(cannonBox)

    const boxGeometry = new THREE.BoxGeometry(2,2,2);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    threeApp.scene.add(box);

  let animate=()=>{
    physicsWorld.fixedStep()
    cannonDebugger.update()
    box.position.copy(cannonBox.position)
    box.quaternion.copy(cannonBox.quaternion)
    sp.position.copy(sphere.position)
    sp.quaternion.copy(sphere.quaternion)
    window.requestAnimationFrame(animate)
  }
  animate()
}