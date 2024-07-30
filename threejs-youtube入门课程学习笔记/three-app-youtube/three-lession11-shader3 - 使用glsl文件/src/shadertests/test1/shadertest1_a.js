import * as THREE from 'three'
import ThreeApp from '../../lib/threeapp'
import vertexShaderSource from './a_vertex.glsl'
import fragShaderSource1 from './a_frag.glsl'


export function shaderTest1a(){
   //创建three应用程序对象
   let threeApp = new ThreeApp("myThreeJSCanvas")
   //初始化场景
   threeApp.initApp()
   //调用动画渲染效果
   threeApp.animate()
   //axeshelper
   const axesHelper = new THREE.AxesHelper(16);
   threeApp.scene.add(axesHelper);
   // define uniform data
   const uniformData = {
     u_time: {
       type: 'f',
       value: threeApp.clock.getElapsedTime(),
     },
   };
   const render = () => {
     uniformData.u_time.value = threeApp.clock.getElapsedTime();
     window.requestAnimationFrame(render);
   };
   render();
 
   // glsl shader with uniform variables
   const boxGeometry = new THREE.BoxGeometry(24, 4, 24, 24, 4, 24);
   const boxMaterial = new THREE.ShaderMaterial({
     wireframe: true,
     uniforms: uniformData,
     vertexShader: vertexShaderSource,
     fragmentShader: fragShaderSource1,
   });
   const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
   threeApp.scene.add(boxMesh);
}