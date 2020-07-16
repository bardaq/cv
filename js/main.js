import * as THREE from './vendor/three.module.js';
import head from '../static/head-half.js'

var xDirection = true;
var container;
var camera, scene, renderer;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var pointCloud;

init();
animate();
document.addEventListener( 'mousemove', onDocumentMouseMove, false );

function init() {
    container = document.createElement('div');
    container.setAttribute('id', 'head');
    container.setAttribute ('style', `
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
    `);
    document.body.appendChild( container );
    
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 5;
    
    scene = new THREE.Scene();
    scene.add( camera );

    pointCloud = new THREE.Group();
    pointCloud.rotateX(.15)
    pointCloud.rotateY(-.15)

    for (const coordinates of head) {
        var dotGeometry = new THREE.Geometry();
        dotGeometry.vertices.push(new THREE.Vector3( coordinates.x, coordinates.y, coordinates.z));
        var dotMaterial = new THREE.PointsMaterial( { size: 1, sizeAttenuation: false } );
        var dotGeometry = new THREE.Points( dotGeometry, dotMaterial );
        pointCloud.add(dotGeometry);
    }

    scene.add(pointCloud);
    pointCloud

    renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x0f0f0f, 0 );
    container.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
    mouseX = ( event.clientX - windowHalfX ) / 100;
    mouseY = ( event.clientY - windowHalfY ) / 100;
}

function animate() {
    requestAnimationFrame( animate );
    render();
    if (xDirection) camera.position.x += .002;
    else camera.position.x -= .002;
}

function render() {
    if (camera.position.x > 1.2 || camera.position.x < -0.6) xDirection = !xDirection;
    // camera.position.y += ( mouseY - camera.position.y ) * yMouseRatio;
    // else if (camera.position.y > -1.3 && camera.position.y < 1.3) {
    //     camera.position.y += ( mouseY - camera.position.y ) * yMouseRatio;
    // }
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
}