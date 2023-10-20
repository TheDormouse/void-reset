"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { r3f } from "./rat";
import { Three } from "./Three";
import { View as ViewImpl } from "@react-three/drei";
import { A11yAnnouncer } from "@react-three/a11y";
import {
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
  Bloom,
} from "@react-three/postprocessing";

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      {...props}
      shadows
      gl={{
        powerPreference: "high-performance",
        alpha: true,
        antialias: true,
        stencil: true,
        depth: true,
      }}
    >
      <OrbitControls />
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      {/* @ts-ignore */}
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
}

export const View = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>{children}</ViewImpl>
      </Three>
      <A11yAnnouncer />
    </>
  );
});
