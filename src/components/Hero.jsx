import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-ful h-screen mx-auto">
			<div
				className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					{/* The purple circle */}
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />{" "}
					{/* The purple line under the circle */}
					<div className="w-1 sm:h-80 h-40 violet-gradient" />{" "}
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className="text-[#915eff]">Andy</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I build data pipelines, AI models,
						{/* On 'small' screens and larger, there will be a line break; on screens smaller than the 'small' size, there will not be a line break */}
						<br className="sm:block hidden" />
						and web applications.
					</p>
				</div>
			</div>
			<ComputersCanvas />
		</section>
	);
};

export default Hero;
