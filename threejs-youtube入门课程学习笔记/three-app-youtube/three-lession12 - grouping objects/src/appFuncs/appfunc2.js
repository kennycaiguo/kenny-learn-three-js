import * as THREE from 'three'
import ThreeApp from '../lib/threeapp2'

export function appFunc2(canvas){
    let threeApp = new ThreeApp(canvas)
    threeApp.initApp()
    threeApp.animate()

    //加载纹理 
    let sunTexture = new THREE.TextureLoader().load('../../assets/sun.jpeg')
    let earthTexture = new THREE.TextureLoader().load('../../assets/earth.jpeg')
    let moonTexture = new THREE.TextureLoader().load('../../assets/moon.jpeg')

    const sunGeometry = new THREE.SphereGeometry(4);
    const sunMaterial = new THREE.MeshStandardMaterial({
      map: sunTexture,
    });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    threeApp.scene.add(sunMesh);

    const earthGeometry = new THREE.SphereGeometry(2);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.position.x = 12;
    threeApp.scene.add(earthMesh);

  
    const animate = () => {
      // 不要旋转最高场景，只让地球绕转
      let t = threeApp.clock.getElapsedTime()
      earthMesh.position.x = 12 * Math.cos(t/2)
      earthMesh.position.z = -12 * Math.sin(t/2)
      earthMesh.rotation.y = t
      window.requestAnimationFrame(animate);
    };
    animate();

}