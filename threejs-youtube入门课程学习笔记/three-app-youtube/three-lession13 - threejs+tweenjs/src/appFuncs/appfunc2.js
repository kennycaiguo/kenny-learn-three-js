import * as THREE from 'three'
import ThreeApp from '../lib/threeapp2'
import * as TWEEN from '@tweenjs/tween.js' //导入tweenjs

export function appFunc2(canvas){
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

    let tween = new TWEEN.Tween({x:0,xRatation:0})
        .to({x:5,xRatation:Math.PI/2},2000)
        .onUpdate((coords)=>{
          box.position.x = coords.x
          box.rotation.x = coords.xRatation
        }).start()
}