import * as THREE from 'three'
import ThreeApp from '../lib/threeapp2'

export function appFunc1(canvas){
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

    //part 2.1 - start rotating the earth around the sun
    const animate = () => {
      threeApp.scene.rotation.y += 0.005; //可以旋转整个场景
      window.requestAnimationFrame(animate);
    };
    animate();

}