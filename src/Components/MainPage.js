import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function MainPage() {
  const threeContainer = useRef();
  let mixer;
  let mixer2;
  let cloud;
  let bird;

  useEffect(() => {
    // Create a new scene
    const scene = new THREE.Scene();

    // Create a new camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 3.5, 6.5); // Adjust camera position

    // Set the background
    const backTexture = new THREE.TextureLoader().load(process.env.PUBLIC_URL + '/images/sky.jpg');
    scene.background = backTexture;

    // Create a new renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeContainer.current.appendChild(renderer.domElement);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      process.env.PUBLIC_URL + '/models/miRoom.glb',
      (gltf) => {
        gltf.scene.rotation.y = -Math.PI / 4; // 45 degrees in radians
        gltf.scene.needsUpdate = true;
        gltf.scene.position.set(0, -2.5, 0);
        scene.add(gltf.scene);

        // If the GLTF file contains animations, initialize the animation mixer
        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(gltf.scene);

          // Add all animations to the mixer
          for (let i = 0; i < gltf.animations.length; i++) {
            const animation = gltf.animations[i];
            mixer.clipAction(animation).play(); // Play each animation
          }
        }
      },
      // Progress callback (optional)
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      // Error callback
      (error) => {
        console.error('Error loading GLTF model', error);
      }
    );

    // Load bird model
    const birdLoader = new GLTFLoader();
    birdLoader.load(
      process.env.PUBLIC_URL + '/models/bird.glb',
      (gltf) => {
        bird = gltf.scene;
        bird.position.set(8, 2, -2);
        bird.scale.set(0.2, 0.2, 0.2);
        scene.add(bird);
        // If the GLTF file contains animations, initialize the animation mixer
        if (gltf.animations && gltf.animations.length) {
          mixer2 = new THREE.AnimationMixer(bird);

          // Add all animations to the mixer
          for (let i = 0; i < gltf.animations.length; i++) {
            const animation = gltf.animations[i];
            mixer2.clipAction(animation).play(); // Play each animation
          }
        }
        
      },
      // Progress callback (optional)
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      // Error callback
      (error) => {
        console.error('Error loading cloud model', error);
      }
    );

    // Load the second cloud
    const cloudLoader = new GLTFLoader();
     cloudLoader.load(
      process.env.PUBLIC_URL + '/models/cloud.glb',
      (gltf) => {
        const cloud2 = gltf.scene.clone(); // Create a clone of the loaded object
        cloud2.rotation.y = Math.PI /4; // 45 degrees in radians
        cloud2.position.set(-7.5, 2, -2); // Set position for the second cloud
        scene.add(cloud2); // Add the second cloud to the scene
      },
      // Progress callback (optional)
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      // Error callback
      (error) => {
        console.error('Error loading cloud model', error);
      }
    );

    // Add Orbital Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Add damping for smoother rotation
    controls.dampingFactor = 0.45; // Adjust damping factor
    // Limit orbital control
    controls.minPolarAngle = Math.PI / 3; // Minimum polar angle (in radians)
    controls.maxPolarAngle = Math.PI / 2; // Maximum polar angle (in radians)
    controls.minAzimuthAngle = -Math.PI / 4; // Minimum azimuth angle (in radians)
    controls.maxAzimuthAngle = Math.PI / 4; // Maximum azimuth angle (in radians)
    controls.enableZoom= false;
    controls.enablePan = false;

    //Light

    //Create a RectAreaLight
    const color = 0xfdcc6c;
    const intensity = 70;
    const width = 2;
    const height = 2;
    const rectLight = new THREE.RectAreaLight(color, intensity, width, height);

    // Position and rotate the light
    rectLight.position.set(-5, 4, 0);
    rectLight.rotation.set(-Math.PI / 2, 0, 0); // Rotate if needed

    // Add the light to the scene
    scene.add(rectLight);

    // Mouse move event listener
    const onMouseMove = (event) => {
      if (bird) {
        // Get the normalized device coordinates (NDC) of the mouse position
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
        // Convert the NDC to world coordinates
        const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
        vector.unproject(camera);
    
        // Calculate the direction and distance from the camera to the mouse position
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
    
        // Calculate the final position of the bird
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    
        // Update the position of the bird
        bird.position.copy(pos);
    
        // Rotate the bird to face the mouse cursor
        bird.lookAt(camera.position);
      }
    };

    // Add mouse move event listener
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      if (mixer) {
        mixer.update(0.01); // Update mixer with delta time
      }
        // Update mixer for the second cloud (if it exists)
      if (mixer2) {
        mixer2.update(0.01); // Update mixer with delta time
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      window.removeEventListener('mousemove', onMouseMove); // Remove event listener
    };
  }, []);

  return <div ref={threeContainer} />;
}

export default MainPage;
