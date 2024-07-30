import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js'
import {VOXLoader} from 'three/examples/jsm/loaders/VOXLoader.js'
import {TTFLoader} from 'three/examples/jsm/loaders/TTFLoader.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

//很简单就是把这些类导入进来又导出，做的编写一次，使用多次的目的
export {
  GUI,OrbitControls,GLTFLoader,FBXLoader,VOXLoader,TTFLoader,FontLoader,TextGeometry
}