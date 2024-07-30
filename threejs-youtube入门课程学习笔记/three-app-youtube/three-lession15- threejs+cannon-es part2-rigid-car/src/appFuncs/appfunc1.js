import * as THREE from 'three'
import ThreeApp from '../lib/threeapp2'
// import * as TWEEN from '@tweenjs/tween.js' //导入tweenjs
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'

export function appFunc1(canvas){
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
    const animate = () => {
      physicsWorld.fixedStep();
      cannonDebugger.update();
      window.requestAnimationFrame(animate);
    };
    animate();
}