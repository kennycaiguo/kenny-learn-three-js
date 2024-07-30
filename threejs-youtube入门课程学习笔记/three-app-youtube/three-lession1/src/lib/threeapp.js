import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module';

export default class ThreeApp{
    constructor(canvasId){
        //1.定义场景，相机，渲染器
        this.scene = undefined
        this.camera = undefined
        this.renderer = undefined
        //2.定义相机参数,但是保存在本类中
        this.fov = 45
        this.nearPlane = 1
        this.farPlane = 1000
        this.canvasId = canvasId
        //3.定义额外组件
        this.clock = undefined
        this.controls = undefined
        this.stats = undefined
        //4.定义环境光和方向光
        this.ambientLight = undefined
        this.directionalLight = undefined  
    }

    initApp(){
        //创建场景对象并且赋值给成员变量
        this.scene = new THREE.Scene()
        //创建相机对象并且用相机成员变量接收
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth/window.innerHeight,
            this.nearPlane,
            this.farPlane
        )
        //调整相机位置
        this.camera.position.z = 48
        //根据传入的id获取画布对象
        let canvas = document.getElementById(this.canvasId)
        //创建渲染器
        this.renderer = new THREE.WebGLRenderer({
             canvas,
             antialias:true
         })
        //设置渲染器的渲染尺寸
        this.renderer.setSize(window.innerWidth,window.innerHeight)
        //添加到body中
        document.body.appendChild(this.renderer.domElement)
        //创建时钟，轨道控制器，检测帧数(FPS)的工具
        this.clock = new THREE.Clock()
        this.controls = new OrbitControls(this.camera,this.renderer.domElement)
        this.stats = Stats()
        //将检测帧数(FPS)的工具添加到body中
        document.body.appendChild(this.stats.domElement)
        //创建环境光
        this.ambientLight = new THREE.AmbientLight(0xffffff,0.5)
        this.ambientLight.castShadow = true
        //把环境光添加到场景中
        this.scene.add(this.ambientLight)
        //创建方向光，其实是平行光
        this.directionalLight = new THREE.DirectionalLight(0xffffff,1)
        //设置方向光的位置
        this.directionalLight.position.set(0,32,64)
        //添加方向光到场景中
        this.scene.add(this.directionalLight)
        //给window对象添加事件监听，用来实现窗口的响应式功能
        window.addEventListener('resize',()=>this.onWindowResize(),false)
        
    }
    //定义animate成员函数，这个函数在外部调用
    animate(){
        window.requestAnimationFrame(this.animate.bind(this))
        this.render()
        this.stats.update()
        this.controls.update()
    }

    render(){
        this.renderer.render(this.scene,this.camera)
    }

    onWindowResize(){
        //重新计算相机的宽高比
        this.camera.aspect = window.innerWidth/window.innerHeight
        //更新相机的投影矩阵
        this.camera.updateProjectionMatrix()
        //重新设置渲染器的渲染大小
        this.renderer.setSize(window.innerWidth,window.innerHeight)
    }
}