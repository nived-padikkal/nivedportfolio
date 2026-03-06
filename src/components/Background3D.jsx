import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const SnowParticles = () => {
    const pointsRef = useRef();

    // Create 5000 random points for snow
    const [positions, speeds, scales] = useMemo(() => {
        const count = 5000;
        const pos = new Float32Array(count * 3);
        const spd = new Float32Array(count);
        const scl = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Spread the particles in a dense wide block
            pos[i * 3] = (Math.random() - 0.5) * 40;     // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
            spd[i] = Math.random() * 0.05 + 0.01;        // fall speed
            scl[i] = Math.random();                      // Scale
        }
        return [pos, spd, scl];
    }, []);

    const { camera } = useThree();
    const mouse = useRef({ x: 0, y: 0 });
    const scrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame((state) => {
        // Interactive mouse parallax
        mouse.current.x = (state.pointer.x * Math.PI) / 8;
        mouse.current.y = (state.pointer.y * Math.PI) / 8;

        // Move camera with mouse + full 3D scroll depth mapping
        const targetX = mouse.current.x;
        const targetY = -mouse.current.y;

        // Smooth camera interpolation based on scroll and mouse
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (targetY - camera.position.y) * 0.05;

        // Calculate world position for mouse interaction (tickle effect)
        const vector = new THREE.Vector3(state.pointer.x, state.pointer.y, 0.5);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));

        // We scroll the scene continuously based on Y offset and depth
        const currentScroll = scrollY.current;

        if (pointsRef.current) {
            const posArray = pointsRef.current.geometry.attributes.position.array;
            for (let i = 0; i < 5000; i++) {
                // natural falling
                posArray[i * 3 + 1] -= speeds[i];

                // Wrap around vertically
                if (posArray[i * 3 + 1] < -20) {
                    posArray[i * 3 + 1] = 20;
                }

                // Interactive tickle effect (repel particles from mouse)
                const dx = posArray[i * 3] - pos.x;
                const dy = posArray[i * 3 + 1] - pos.y;
                const distSq = dx * dx + dy * dy;

                // If particle is close to the mouse (squared distance < 4)
                if (distSq < 4.0 && distSq > 0) {
                    const force = (4.0 - distSq) * 0.02; // repulsive force
                    posArray[i * 3] += dx * force;
                    posArray[i * 3 + 1] += dy * force;
                }
            }
            pointsRef.current.geometry.attributes.position.needsUpdate = true;

            // Full 3D rotation based on scroll depth
            pointsRef.current.rotation.y = currentScroll * 0.0003;
            pointsRef.current.rotation.x = currentScroll * 0.0001;
        }
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#00ff88"
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-transparent">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
                {/* Adds ambient fog for depth */}
                <fog attach="fog" args={['#0a0e17', 5, 20]} />
                <SnowParticles />
            </Canvas>
        </div>
    );
};

export default Background3D;
