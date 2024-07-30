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
    //创建CannonDebugger实例对象
    const cannonDebugger = new CannonDebugger(threeApp.scene, physicsWorld);
    //创建一个车体
    let carBody = new CANNON.Body({
      mass:5,
      position:new CANNON.Vec3(0,6,0),
      shape:new CANNON.Box(new CANNON.Vec3(4,0.5,2))
    })
    //利用车体创建刚体车辆
    let vehicle = new CANNON.RigidVehicle({
       chassisBody:carBody
    })

    //创建轮子
    let mass = 1
    let axisWidth = 5
    let wheelShape = new CANNON.Sphere(1)
    let wheelMaterial = new CANNON.Material('wheel')
    let down = new CANNON.Vec3(0,-1,0)

    let wheelBody1 = new CANNON.Body({
      mass,
      wheelMaterial
    })
    wheelBody1.addShape(wheelShape)
    wheelBody1.angularDamping = 0.4
    //创建轮子后，需要添加到钢体车辆里面
    vehicle.addWheel({
      body:wheelBody1,
      position:new CANNON.Vec3(-2, 0, axisWidth / 2),
      axis:new CANNON.Vec3(0,0,1),
      direction:down
    })
    let wheelBody2 = new CANNON.Body({
      mass,
      wheelMaterial
    })
    wheelBody2.addShape(wheelShape)
    wheelBody2.angularDamping = 0.4
    //创建轮子后，需要添加到钢体车辆里面
    vehicle.addWheel({
      body:wheelBody2,
      position:new CANNON.Vec3(-2, 0, -axisWidth / 2),
      axis:new CANNON.Vec3(0,0,1),
      direction:down
    })
    let wheelBody3 = new CANNON.Body({
      mass,
      wheelMaterial
    })
    wheelBody3.addShape(wheelShape)
    wheelBody3.angularDamping = 0.4
    //创建轮子后，需要添加到钢体车辆里面
    vehicle.addWheel({
      body:wheelBody3,
      position:new CANNON.Vec3(2, 0, axisWidth / 2),
      axis:new CANNON.Vec3(0,0,1),
      direction:down
    })
    let wheelBody4 = new CANNON.Body({
      mass,
      wheelMaterial
    })
    wheelBody4.addShape(wheelShape)
    wheelBody4.angularDamping = 0.4
    //创建轮子后，需要添加到钢体车辆里面
    vehicle.addWheel({
      body:wheelBody4,
      position:new CANNON.Vec3(2, 0, -axisWidth / 2),
      axis:new CANNON.Vec3(0,0,1),
      direction:down
    })
        
    vehicle.addToWorld(physicsWorld)
    // move car based on user input
    document.addEventListener('keydown',(event)=>{
      let maxSteerVal = Math.PI/8
      let maxForce = 10
      switch (event.key) {
        case 'w':
        case 'ArrowUp':
          vehicle.setWheelForce(maxForce,0)  
          vehicle.setWheelForce(maxForce,1)
         
          break;
        case 's':
        case 'ArrowDown':
          vehicle.setWheelForce(-maxForce/2,0)  
          vehicle.setWheelForce(-maxForce/2,1)
          break;
        case 'a':
        case 'ArrowLeft':
          vehicle.setSteeringValue(maxSteerVal,0)  
          vehicle.setSteeringValue(maxSteerVal,1)
          break;
        case 'd':
        case 'ArrowRight':
          vehicle.setSteeringValue(-maxSteerVal,0)  
          vehicle.setSteeringValue(-maxSteerVal,1)
          break;
      }
    })

    document.addEventListener('keyup',(event)=>{
      switch (event.key) {
        case 'w':
        case 'ArrowUp':
          vehicle.setWheelForce(0,0)  
          vehicle.setWheelForce(0,1)
          break;
        case 's':
        case 'ArrowDown':
          vehicle.setWheelForce(0,0)  
          vehicle.setWheelForce(0,1)
          
          break;
        case 'a':
        case 'ArrowLeft':
          vehicle.setSteeringValue(0,0)  
          vehicle.setSteeringValue(0,1)
          break;
        case 'd':
        case 'ArrowRight':
          vehicle.setSteeringValue(0,0)  
          vehicle.setSteeringValue(0,1)
          break;
      }
    })
    // sync game world with physics world
    let boxGeo = new THREE.BoxGeometry(8,1,4)
    let boxMat = new THREE.MeshNormalMaterial()
    let box = new THREE.Mesh(boxGeo,boxMat)
    threeApp.scene.add(box)

    let sphereGeo = new THREE.SphereGeometry(1)
    let sphereMat = new THREE.MeshNormalMaterial()
    let sphere1 = new THREE.Mesh(sphereGeo,sphereMat)
    threeApp.scene.add(sphere1)
    let sphere2 = new THREE.Mesh(sphereGeo,sphereMat)
    threeApp.scene.add(sphere2)
    let sphere3 = new THREE.Mesh(sphereGeo,sphereMat)
    threeApp.scene.add(sphere3)
    let sphere4 = new THREE.Mesh(sphereGeo,sphereMat)
    threeApp.scene.add(sphere4)

    
    const animate = () => {
      physicsWorld.fixedStep();
      cannonDebugger.update();
      //把 CANNON创建的线框物体和Threejs创建的物体组合起来，需要把线框的位置和四元数复制给threejs文件的物体
      box.position.copy(carBody.position)
      box.quaternion.copy(carBody.quaternion)
      sphere1.position.copy(wheelBody1.position)
      sphere1.quaternion.copy(wheelBody1.quaternion)
      sphere2.position.copy(wheelBody2.position)
      sphere2.quaternion.copy(wheelBody2.quaternion)
      sphere3.position.copy(wheelBody3.position)
      sphere3.quaternion.copy(wheelBody3.quaternion)
      sphere4.position.copy(wheelBody4.position)
      sphere4.quaternion.copy(wheelBody4.quaternion)
     
      window.requestAnimationFrame(animate);
    };
    animate();
}