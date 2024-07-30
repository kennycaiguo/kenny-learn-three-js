import * as THREE from 'three'
import ThreeApp from '../lib/threeapp2'
import * as TWEEN from '@tweenjs/tween.js' //导入tweenjs

export function appFunc7(canvas){
    let threeApp = new ThreeApp(canvas)
    threeApp.initApp()
    threeApp.animate()
    
    let axesHelper = new THREE.AxesHelper(8)
    threeApp.scene.add(axesHelper)
 

    const boxGeometry = new THREE.BoxGeometry(4,4,4);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    threeApp.scene.add(box);

    const groundGeometry = new THREE.BoxGeometry(24,1,24);
    const groundMaterial = new THREE.MeshNormalMaterial();
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.position.y = -4;
    threeApp.scene.add(groundMesh);

    
    const animate = (t) => {
      TWEEN.update(t) 
      window.requestAnimationFrame(animate);
    };
    animate();

    const tween1 = new TWEEN.Tween({ x: 0, y: 0, xRotation: 0 })
    .to({ x: 5, y: 8, xRotation: Math.PI / 2 }, 2000)
    .onUpdate((coords) => {
      box.position.x = coords.x;
      box.position.y = coords.y;
      box.rotation.x = coords.xRotation;
    })
    .easing(TWEEN.Easing.Exponential.InOut)
    .delay(100);
  const tween2 = new TWEEN.Tween({ x: 5, y: 8, xRotation: Math.PI / 2 })
    .to({ x: -5, y: 8, xRotation: 0 }, 2000)
    .onUpdate((coords) => {
      box.position.x = coords.x;
      box.position.y = coords.y;
      box.rotation.x = coords.xRotation;
    })
    .easing(TWEEN.Easing.Linear.None)
    .delay(100);
  tween1.chain(tween2);
  tween2.chain(tween1);
  tween1.start();
}