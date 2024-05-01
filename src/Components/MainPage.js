import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls

function MainPage() {
  const threeContainer = useRef();
  let mixer;

  useEffect(() => {
    // Create a new scene
    const scene = new THREE.Scene();

    // Create a new camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10); // Adjust camera position
    
    // Set the background color
    scene.background = new THREE.Color(0x4bb5eb); // Black color
    
    // Create a new renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeContainer.current.appendChild(renderer.domElement);
      
    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load(
      process.env.PUBLIC_URL + '/models/miRoom.gltf', // Adjust the path to your GLTF model
      (gltf) => {
        scene.add(gltf.scene); // Add the loaded model to the scene

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
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // Error callback
      (error) => {
        console.error('Error loading GLTF model', error);
      }
    );

    
    
    // Add Orbital Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Add damping for smoother rotation
    controls.dampingFactor = 0.25; // Adjust damping factor

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
    };
  }, []); 

  return (
    <div ref={threeContainer} />
  );
}

export default MainPage;
