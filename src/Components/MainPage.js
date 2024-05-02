import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function MainPage() {
  const threeContainer = useRef();
  let mixer;
  let cloud;

  useEffect(() => {
    // Create a new scene
    const scene = new THREE.Scene();

    // Create a new camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 7); // Adjust camera position

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
      process.env.PUBLIC_URL + '/models/miRoom.gltf',
      (gltf) => {
        gltf.scene.rotation.y = -Math.PI / 4; // 45 degrees in radians
        gltf.scene.position.set(0, -1, 0);
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

    // Load cloud model
    const cloudLoader = new GLTFLoader();
    cloudLoader.load(
      process.env.PUBLIC_URL + '/models/cloud.glb',
      (gltf) => {
        cloud = gltf.scene;
        cloud.position.set(10, 2, -2);
        scene.add(cloud);
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

    //Light

    //Create a RectAreaLight
    const color = 0xfdcc6c;
    const intensity = 50;
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
      if (cloud) {
        // Update cloud position based on mouse movement
        cloud.position.x += (event.movementX * 0.001); // Adjust the factor to control the sensitivity
        cloud.position.y -= (event.movementY * 0.001);
        cloud.rotation.y += 0.01; // Adjust the rotation speed as needed
      }
    };

    // Add mouse move event listener
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      if (mixer) {
        mixer.update(0.01); // Update mixer with delta time
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
