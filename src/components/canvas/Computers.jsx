import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={4} groundColor="black" />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={2} />
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.4 : 0.75}
				position={isMobile ? [0, -2, -1] : [0, -3, -1.5]}
				rotation={[0, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const meidaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(meidaQuery.matches);
		const handleMeidaQueryChange = (event) => {
			setIsMobile(event.matches);
		};
		meidaQuery.addEventListener("change", handleMeidaQueryChange);
		return () => {
			meidaQuery.removeEventListener("change", handleMeidaQueryChange);
		};
	}, []);
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
