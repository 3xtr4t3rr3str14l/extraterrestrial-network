import BABYLON from 'babylonjs';

const createScene = (engine, canvas) => {
  const scene = new BABYLON.Scene(engine);
  const gravityVector = new BABYLON.Vector3(0, -9.81, 0);
  const physicsPlugin = new BABYLON.CannonJSPlugin();
  scene.enablePhysics(gravityVector, physicsPlugin);
  const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -30), scene);
  // camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, false);

  // create a basic light, aiming 0,1,0 - meaning, to the sky
  // const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

  const boxDims = 3;
  const box = BABYLON.MeshBuilder.CreateBox('box', {
    width: boxDims, height: boxDims, depth: boxDims,
  }, scene);
  box.position.x = -9;
  box.position.y = 3;

  const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { diameter: 2,
  }, scene);
  sphere.position.x = -6;
  sphere.position.y = 3;

  const disc = BABYLON.MeshBuilder.CreateDisc('disc', {
    radius: 1,
  }, scene);
  disc.position.x = -3;
  disc.position.y = 3;

  const icosphere = BABYLON.MeshBuilder.CreateIcoSphere('icosphere', {
    radius: 1,
  }, scene);
  icosphere.position.x = 0;
  icosphere.position.y = 3;

  const cylinder = BABYLON.MeshBuilder.CreateCylinder('cylinder', {
    heigh: 1, diameterTop: 1, diameterBottom: 1, diameter: 1,
  }, scene);
  cylinder.position.x = 3;
  cylinder.position.y = 3;

  const torusknot = BABYLON.MeshBuilder.CreateTorus('torusknot', {
    diameter: 1, tube: 10,
  }, scene);
  torusknot.position.x = 6;
  torusknot.position.y = 3;

  const groundHeight = 1111;
  const groundWidth = 60;
  const ground = BABYLON.MeshBuilder.CreateGround('ground', {
    width: groundWidth, height: groundHeight,
  }, scene);
  const materialPlane = new BABYLON.StandardMaterial('texturePlane', scene);
  materialPlane.diffuseTexture = new BABYLON.Texture('textures/ultraviolet-asia-1.jpg', scene);
  materialPlane.diffuseTexture.uScale = 1; // Repeat 5 times on the Vertical Axes
  materialPlane.diffuseTexture.vScale = 20; // Repeat 5 times on the Horizontal Axes
  materialPlane.backFaceCulling = false; // Always show the front and the back of an element
  ground.material = materialPlane;

  // music
  // const music = new BABYLON.Sound(
  //  "life-dream", "./life-dream.wav", scene, null, {autoplay:true, loop:true} );

  return scene;
};

export default createScene;
