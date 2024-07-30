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

  const boxGeometry = new THREE.BoxGeometry(24, 4, 24, 24, 4, 24);
  const boxMaterial = new THREE.ShaderMaterial({
    wireframe: true,
    vertexShader: `
      void main()	{
        vec4 result;
        result = vec4(position.x, position.y, position.z, 1.0);
        gl_Position = projectionMatrix
          * modelViewMatrix
          * result;
      }
      `,
    fragmentShader: `
      // varying vec3 pos;
      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
      `,
  });
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  threeApp.scene.add(boxMesh);
}
function main2() {
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
    vertexShader: `
      uniform float u_time;

      void main()	{
        vec4 result;

        // 1.re-write boiler plate code with shader
        result = vec4(position.x, position.y, position.z, 1.0);
        result = vec4(position.x, position.y + sin(u_time), position.z, 1.0);

        gl_Position = projectionMatrix
          * modelViewMatrix
          * result;
      }
      `,
    fragmentShader: `
      uniform float u_time;
      void main() {
        // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        // gl_FragColor = vec4(sin(u_time), 0.0, 0.0, 1.0);
        gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
      }
      `,
  });
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  threeApp.scene.add(boxMesh);
}

function main3() {
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
    vertexShader: `
      uniform float u_time;

      void main()	{
        vec4 result;

         //3. convert box into a 2D sine wave plane
          result = vec4(position.x, sin(position.z), position.z, 1.0);
          result = vec4(position.x, sin(position.z + u_time), position.z, 1.0);

        gl_Position = projectionMatrix
          * modelViewMatrix
          * result;
      }
      `,
    fragmentShader: `
      uniform float u_time;
      void main() {
        // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        // gl_FragColor = vec4(sin(u_time), 0.0, 0.0, 1.0);
        gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
      }
      `,
  });
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  threeApp.scene.add(boxMesh);
}
function main4() {
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
    vertexShader: `
      uniform float u_time;

      void main()	{
        vec4 result;

        // 4.change the 2D sine wave plane into a wavy box
        result = vec4(position.x, sin(position.z) + position.y, position.z, 1.0);
        result = vec4(position.x, sin(position.z + u_time) + position.y, position.z, 1.0);

        gl_Position = projectionMatrix
          * modelViewMatrix
          * result;
      }
      `,
    fragmentShader: `
      uniform float u_time;
      void main() {
        // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        // gl_FragColor = vec4(sin(u_time), 0.0, 0.0, 1.0);
        gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
      }
      `,
  });
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  threeApp.scene.add(boxMesh);
}



function main5() {
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
    vertexShader: `
      uniform float u_time;

      void main()	{
        vec4 result;

        // 5.change how wavy the box is by updating frequency
        result = vec4(position.x, sin(position.z/4.0) + position.y, position.z, 1.0);
        result = vec4(position.x, sin((position.z)/4.0 + u_time) + position.y, position.z, 1.0);

        gl_Position = projectionMatrix
          * modelViewMatrix
          * result;
      }
      `,
    fragmentShader: `
      uniform float u_time;
      void main() {
        // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        // gl_FragColor = vec4(sin(u_time), 0.0, 0.0, 1.0);
        gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
      }
      `,
  });
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  threeApp.scene.add(boxMesh);
}

function main6() {
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
    vertexShader: `
      uniform float u_time;

      void main()	{
        vec4 result;

        // 6change the amplitude of the box's waves
        result = vec4(position.x, 4.0*sin(position.z/4.0) + position.y, position.z, 1.0);
        // result = vec4(position.x, 4.0*sin(position.z/4.0 + u_time) + position.y, position.z, 1.0);

        gl_Position = projectionMatrix
          * modelViewMatrix
          * result;
      }
      `,
    fragmentShader: `
      uniform float u_time;
      void main() {
        // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        // gl_FragColor = vec4(sin(u_time), 0.0, 0.0, 1.0);
        gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
      }
      `,
  });
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  threeApp.scene.add(boxMesh);
}

function main7() {
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

  // varying variables
  const boxGeometry = new THREE.BoxGeometry(24, 4, 24, 24, 4, 24);
  const boxMaterial = new THREE.ShaderMaterial({
    wireframe: true,
    uniforms: uniformData,
    vertexShader: `
      varying vec3 pos;
      uniform float u_time;

      void main()	{
        vec4 result;
        pos = position;

        result = vec4(
          position.x,
          4.0*sin(position.z/4.0 + u_time) + position.y,
          position.z,
          1.0
        );

        gl_Position = projectionMatrix
          * modelViewMatrix
          * result;
      }
      `,
    fragmentShader: `
      varying vec3 pos;
      uniform float u_time;
      void main() {
        if (pos.x >= 0.0) {
          // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
          gl_FragColor = vec4(abs(sin(u_time)), 0.0, 0.0, 1.0);
        } else {
          // gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
          gl_FragColor = vec4(0.0, abs(cos(u_time)), 0.0, 1.0);
        }
      }
      `,
  });
  const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
  threeApp.scene.add(boxMesh);
}

function App() {
  useEffect(() => {
    main1()
    // main2()
    // main3()
    // main4()
    // main5()
    // main6()
    // main7()

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
