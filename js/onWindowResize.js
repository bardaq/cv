export default function onWindowResize() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );

    camera.aspect = 0.5 * aspect;
    camera.updateProjectionMatrix();

    cameraPerspective.aspect = 0.5 * aspect;
    cameraPerspective.updateProjectionMatrix();

    cameraOrtho.left = - 0.5 * frustumSize * aspect / 2;
    cameraOrtho.right = 0.5 * frustumSize * aspect / 2;
    cameraOrtho.top = frustumSize / 2;
    cameraOrtho.bottom = - frustumSize / 2;
    cameraOrtho.updateProjectionMatrix();

}