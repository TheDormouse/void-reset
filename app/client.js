"use client";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three/examples/jsm/loaders/GLTFLoader";

export default function Client() {
  const gltf = useLoader(THREE.GLTFLoader, "/mime.glb");
  console.log("gltf", gltf);
  return (
    <>
      <mesh>
        <primitive object={gltf.scene} />
      </mesh>
    </>
  );
}
