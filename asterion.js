// ThreeJsView.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as THREE from 'three';

const ThreeJsView = ({ asteroid }) => {
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);
  const [renderer, setRenderer] = useState(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('canvas'),
    });

    setScene(scene);
    setCamera(camera);
    setRenderer(renderer);

    // Create 3D model of asteroid
    const geometry = new THREE.SphereGeometry(1, 60, 60);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animate the 3D model
    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <View
      style={{
        width: 200,
        height: 200,
        backgroundColor: '#000',
      }}
    >
      <canvas id="canvas" />
    </View>
  );
};

export default ThreeJsView;
```

