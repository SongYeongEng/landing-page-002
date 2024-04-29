import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; 
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'; 

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

    // Load FBX model - Character
    const characterLoader = new FBXLoader();
    characterLoader.load(
      process.env.PUBLIC_URL + '/models/walk.fbx', // Path to the character model
      (character) => {
        character.scale.set(0.05, 0.05, 0.05); // Adjust scale

        scene.add(character); // Add the loaded character model to the scene

        // Get animations
        mixer = new THREE.AnimationMixer(character);
        const action = mixer.clipAction(character.animations[1]); // Assuming the first animation
        action.play();
      },
      undefined,
      (error) => {
        console.error('Error loading character FBX model', error);
      }
    );

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1); // Adjust light position
    scene.add(directionalLight);

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
