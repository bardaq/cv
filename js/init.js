import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module'
import onWindowResize from './onWindowResize';

export default function init(
    container, scene, camera, cameraPerspective, cameraPerspectiveHelper, frustumSize, cameraOrtho,
    cameraOrthoHelper, cameraRig, renderer, activeCamera, activeHelper, stats,
) {
    var aspect = window.innerWidth / window.innerHeight;
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    scene = new THREE.Scene();
             
    camera = new THREE.PerspectiveCamera( 50, 0.5 * aspect, 1, 10000 );
    camera.position.z = 2500;
    cameraPerspective = new THREE.PerspectiveCamera( 50, 0.5 * aspect, 150, 1000 );
    cameraPerspectiveHelper = new THREE.CameraHelper( cameraPerspective );
    scene.add( cameraPerspectiveHelper );
    
    cameraOrtho = new THREE.OrthographicCamera( 0.5 * frustumSize * aspect / - 2, 0.5 * frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 150, 1000 );
    cameraOrthoHelper = new THREE.CameraHelper( cameraOrtho );
    scene.add( cameraOrthoHelper );
    
    activeCamera = cameraPerspective;
    activeHelper = cameraPerspectiveHelper;
    
    cameraOrtho.rotation.y = Math.PI;
    cameraPerspective.rotation.y = Math.PI;
    cameraRig = new THREE.Group();
    cameraRig.add( cameraPerspective );
    cameraRig.add( cameraOrtho );
    scene.add( cameraRig );
    
    
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    renderer.autoClear = false;
    
    stats = new Stats();
    container.appendChild( stats.dom );
        
    window.addEventListener( 'resize', onWindowResize, false );
}
