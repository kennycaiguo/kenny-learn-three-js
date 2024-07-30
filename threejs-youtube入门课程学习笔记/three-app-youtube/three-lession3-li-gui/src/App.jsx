import { useEffect } from 'react'
import './App.css'
import * as THREE from 'three'
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min'
import ThreeApp3 from './lib/threeapp'
function part1() {
  //创建three应用程序对象
  let threeApp = new ThreeApp3("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()
  let boxGeometry = new THREE.BoxGeometry(24, 24, 24)
  let boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
  let box = new THREE.Mesh(boxGeometry, boxMaterial)
  threeApp.scene.add(box)
  //创建GUI对象
  let gui = new GUI()
  //把box的一些属性添加到gui中
  gui.add(box.rotation, "x", 0, Math.PI).name('Rotate X Axis');
  gui.add(box.rotation, "y", 0, Math.PI).name('Rotate Y Axis');
  gui.add(box.rotation, "z", 0, Math.PI).name('Rotate Z Axis');
  gui.add(box.scale, "x", 0, 2).name('Scale X Axis');
  gui.add(box.scale, "y", 0, 2).name('Scale Y Axis');
  gui.add(box.scale, "z", 0, 2).name('Scale Z Axis');
  () => {
    return gui.destroy()
  }
}

function part2() {
  //创建three应用程序对象
  let threeApp = new ThreeApp3("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()
  let boxGeometry = new THREE.BoxGeometry(24, 24, 24)
  let boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
  let box = new THREE.Mesh(boxGeometry, boxMaterial)
  threeApp.scene.add(box)
  //创建GUI对象
  let gui = new GUI()
  //把box的一些属性添加到gui中
  gui.add(box.rotation, "x", 0, Math.PI).name('Rotate X Axis');
  gui.add(box.rotation, "y", 0, Math.PI).name('Rotate Y Axis');
  gui.add(box.rotation, "z", 0, Math.PI).name('Rotate Z Axis');
  gui.add(box.scale, "x", 0, 2).name('Scale X Axis');
  gui.add(box.scale, "y", 0, 2).name('Scale Y Axis');
  gui.add(box.scale, "z", 0, 2).name('Scale Z Axis');

  //修改立方体的颜色
  let materialParams = {
    boxColor: box.material.color.getHex()
  };
  //打开和关闭线框功能
  gui.add(box.material, "wireframe");
  gui.addColor(materialParams, 'boxColor').onChange((value) => {
    box.material.color.set(value)
  });
  () => {
    return gui.destroy()
  }
}

function part3() {
  //创建three应用程序对象
  let threeApp = new ThreeApp3("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()
  let boxGeometry = new THREE.BoxGeometry(24, 24, 24)
  let boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
  let box = new THREE.Mesh(boxGeometry, boxMaterial)
  threeApp.scene.add(box)
  //创建GUI对象
  let gui = new GUI()
  //先创建一个组：geoFolder
  let geoFolder = gui.addFolder("Mesh Geometry")
  geoFolder.open() //创建几何文件夹
  //添加旋转文件夹
  let rotationFolder = geoFolder.addFolder("Rotation")
  rotationFolder.add(box.rotation, "x", 0, Math.PI).name('Rotate X Axis');
  rotationFolder.add(box.rotation, "y", 0, Math.PI).name('Rotate Y Axis');
  rotationFolder.add(box.rotation, "z", 0, Math.PI).name('Rotate Z Axis');
  //添加缩放文件夹
  let scaleFolder = geoFolder.addFolder('Scale')
  scaleFolder.add(box.scale, "x", 0, 2).name('Scale X Axis');
  scaleFolder.add(box.scale, "y", 0, 2).name('Scale Y Axis');
  scaleFolder.add(box.scale, "z", 0, 2).name('Scale Z Axis');
  scaleFolder.open()
  //添加材质文件夹
  let materialFolder = geoFolder.addFolder("Material")
  //修改立方体的颜色
  let materialParams = {
    boxColor: box.material.color.getHex()
  };
  //打开和关闭线框功能
  materialFolder.add(box.material, "wireframe");
  materialFolder.addColor(materialParams, 'boxColor').onChange((value) => {
    box.material.color.set(value)
  });
  () => {
    return gui.destroy()
  }
}
function part4() {
  //创建three应用程序对象
  let threeApp = new ThreeApp3("myThreeJSCanvas")
  //初始化场景
  threeApp.initApp()
  //调用动画渲染效果
  threeApp.animate()
  let boxGeometry = new THREE.BoxGeometry(24, 24, 24)
  let boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 })
  let box = new THREE.Mesh(boxGeometry, boxMaterial)
  threeApp.scene.add(box)
  //创建GUI对象
  let gui = new GUI()
  //先创建一个组：geoFolder
  let geoFolder = gui.addFolder("Mesh Geometry")
  geoFolder.open() //创建几何文件夹
  //添加旋转文件夹
  let rotationFolder = geoFolder.addFolder("Rotation")
  rotationFolder.add(box.rotation, "x", 0, Math.PI).name('Rotate X Axis');
  rotationFolder.add(box.rotation, "y", 0, Math.PI).name('Rotate Y Axis');
  rotationFolder.add(box.rotation, "z", 0, Math.PI).name('Rotate Z Axis');
  //添加缩放文件夹
  let scaleFolder = geoFolder.addFolder('Scale')
  scaleFolder.add(box.scale, "x", 0, 2).name('Scale X Axis');
  scaleFolder.add(box.scale, "y", 0, 2).name('Scale Y Axis');
  scaleFolder.add(box.scale, "z", 0, 2).name('Scale Z Axis');
  scaleFolder.open()
  //添加材质文件夹
  let materialFolder = geoFolder.addFolder("Material")
  //修改立方体的颜色
  let materialParams = {
    boxColor: box.material.color.getHex()
  };
  //打开和关闭线框功能
  materialFolder.add(box.material, "wireframe");
  materialFolder.addColor(materialParams, 'boxColor').onChange((value) => {
    box.material.color.set(value)
  });
  //添加自定义函数文件夹

  let customFolder = geoFolder.addFolder("Custom Function")
  customFolder.open()
  let customParam = {
    customFunction: false
  }
  customFolder.add(customParam, 'customFunction')
    .name("print'Hello'")
    .onChange((value) => {
      if (value === true) {
        alert('Hello')
      }
    });

  () => {
    return gui.destroy()
  }
}

function App() {
  useEffect(() => {
    // part1()
    // part2()
    // part3()
    part4()
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
