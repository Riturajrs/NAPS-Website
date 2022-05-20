import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import InstaLogo from "../../media/instagram.svg";
import LinkedinLogo from "../../media/linkedin.svg";
import FacebookLogo from "../../media/facebook.svg";
import NapsLogo from "../../media/napslogo.png";

export default function Header() {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.row1}>
				<div className={styles.logoContainer}>
					<Image
						src={NapsLogo}
						alt="Naps Logo"
						objectFit="contain"
						layout="intrinsic"
					/>
				</div>
				<div className={styles.text}>
					<div className={styles.clubName}>
						News and Publication Society
					</div>
					<div className={styles.smallText}>
						Birla Institute of Technology
					</div>
				</div>
			</div>

			<div className={styles.row2}>
				<div className={styles.navContainer}>
					<div className={styles.navItem}>
						<Link href="/">Home</Link>
					</div>
					<div className={styles.navItem}>
						<Link href="/Editorial">Editorial</Link>
					</div>
					<div className={styles.navItem}>
						<Link href="/about">About</Link>
					</div>
					<div className={styles.navItem}>
						<Link href="/Epistle">Epistle</Link>
					</div>
					<div className={styles.navItem}>
						<Link href="/Team">Team</Link>
					</div>
					<div className={styles.navItem}>
						<Link href="/Search">Search</Link>
					</div>
				</div>
				<div className={styles.connectContainer}>
        {/* TODO: add links */}
					<Link href="" passHref>
						<Image
							src={InstaLogo}
							alt="Instagram"
							className={styles.connectItem}
							layout="intrinsic"
						/>
					</Link>
          <Link href="" passHref>
					<Image
						src={LinkedinLogo}
						alt="LinkedIn"
						className={styles.connectItem}
						layout="intrinsic"
					/>
          </Link>
          <Link href="" passHref>
					<Image
						src={FacebookLogo}
						alt="Facebook"
						className={styles.connectItem}
						layout="intrinsic"
					/>
          </Link>
				</div>
			</div>
		</div>
	);
}
