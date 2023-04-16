import React, {useRef} from "react";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

const ThreeModel = (props) => {
  const gltf = useGLTF(props.path);
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.0009; // rotate model on the y-axis
  });

  return (
    <mesh ref={modelRef} {...props} position={[-0.5, -1.5, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default ThreeModel;
