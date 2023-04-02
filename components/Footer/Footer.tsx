import styles from "./Footer.module.css";
import Image from "next/image";
import InstaLogo from "../../media/instagram.svg";
import LinkedinLogo from "../../media/linkedin.svg";
import FacebookLogo from "../../media/facebook.svg";
import NapsLogo from "../../media/napslogo.png";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="lg:px-20 sm:px-12 px-10 m-2 rounded-lg shadow-[0_-1px_6px_1px_rgba(0,0,0,0.04)] border-gray-100 border p-2">
			<div className="">
				<div className="flex flex-col justify-between sm:flex-row">
					<div className="flex text-sm sm:text-base flex-row justify-center w-max mx-auto sm:mx-0 sm:w-auto">
						<div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
							<Link href="/">Home</Link>
						</div>
						<div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
							<Link href="/about">About</Link>
						</div>
						<div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
							<Link href="/Epistle">Epistle</Link>
						</div>
						<div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
							<Link href="/Team">Team</Link>
						</div>
						<div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
							<Link href="/Search">Search</Link>
						</div>
					</div>
					<div className="flex justify-center sm:justify-end cursor-pointer">
						<a href= "https://www.instagram.com/naps_bitmesra/" target="_blank">
							<Image
								src={InstaLogo}
								alt="Instagram"
								className={styles.connectItem}
								layout="intrinsic"
							/>
						</a>
						<a href= "https://www.linkedin.com/company/naps-bit/mycompany/" target="_blank">
							<Image
								src={LinkedinLogo}
								alt="LinkedIn"
								className={styles.connectItem}
								layout="intrinsic"
							/>
						</a>
						<a href="https://www.facebook.com/naps.bit" target="_blank">
							<Image
								src={FacebookLogo}
								alt="Facebook"
								className={styles.connectItem}
								layout="intrinsic"
							/>
						</a>
					</div>
				</div>
				<div className="mt-2 font-light text-sm text-center w-full">
					© News and Publication Society
				</div>
			</div>
		</div>
	);
}
