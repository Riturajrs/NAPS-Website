import style from "./teams.module.css"
import Image from "next/image"
import InstaLogo from "../../media/instagram.svg"
import LinkedinLogo from "../../media/linkedin.svg"
import FacebookLogo from "../../media/facebook.svg"
import sample from "../../media/sample.jpg"

export default function Team() {
	return (
		<div className={style.team}>
			<div className={style.tbg}>
				<div className={style.tbegin}>
					<h3 className={style.ttitle}>Our Creative Team</h3>
					<h1 className={style.tinfo}>
						Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur.
                        <br></br>
    						Excepteur sint occaecat cupidatat non proident
					</h1>
				</div>
                <div className={style.tcard}>
                  <Image src={sample}></Image>
                  <div className={style.tcardbody}>
                    <p className={style.tcardtext}>Some quick example text to build on the card title and make up the bulk of the content.</p>
                  </div>
                  <div className={style.connectContainer}>
                    <Image src={InstaLogo} alt="Instagram" className={style.connectItem} height=""/>
                    <Image src={LinkedinLogo} alt="LinkedIn" className={style.connectItem} />
                    <Image src={FacebookLogo} alt="Facebook" className={style.connectItem} />
                 </div>
                </div>
			</div>
		</div>
	);
}
