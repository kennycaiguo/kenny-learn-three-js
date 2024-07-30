import * as THREE from 'three'
import ThreeApp from '../lib/threeapp2'

export function appFunc4(canvas){
    let threeApp = new ThreeApp(canvas)
    threeApp.initApp()
    threeApp.animate()

    //加载纹理 
    let sunTexture = new THREE.TextureLoader().load('../../assets/sun.jpeg')
    let earthTexture = new THREE.TextureLoader().load('../../assets/earth.jpeg')
    let moonTexture = new THREE.TextureLoader().load('../../assets/moon.jpeg')
    //场景太阳系统组和地球轨道组
    let solarSystemGroup = new THREE.Group()
    let earthOrbit = new THREE.Group()
    let moonOrbit = new THREE.Group() //月球轨道组

    const sunGeometry = new THREE.SphereGeometry(4);
    const sunMaterial = new THREE.MeshStandardMaterial({
      map: sunTexture,
    });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    solarSystemGroup.add(sunMesh) //把太阳添加到太阳系组
    threeApp.scene.add(solarSystemGroup);//把太阳系组添加到场景中

    const earthGeometry = new THREE.SphereGeometry(2);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.position.x = 12;
    earthOrbit.add(earthMesh) //把地球添加到地球轨道组中
    //创建月球并且添加到月球轨道组中
    const moonGeometry = new THREE.SphereGeometry(1);
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: moonTexture,
    });
    let moonMesh = new THREE.Mesh(moonGeometry,moonMaterial)
    moonOrbit.position.x = 12
    moonMesh.position.x = 4
    moonOrbit.add(moonMesh)
    earthOrbit.add(moonOrbit)
    threeApp.scene.add(earthOrbit);//把地球轨道组添加到场景中

  
    const animate = () => {
      // 实现地球绕转太阳转
      let t = threeApp.clock.getElapsedTime()
      //月亮绕转地球转
      moonOrbit.rotation.y += 0.05
      moonMesh.rotation.y = t
      earthOrbit.rotation.y += 0.005 //转太阳转
      earthMesh.rotation.y = t //注意地球需要自转的
      window.requestAnimationFrame(animate);
    };
    animate();

}