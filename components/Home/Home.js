import styles from "./Home.module.css"
import Link from "next/link"
import Image from "next/image";
import NapsLogo from "../../media/napslogo.png";
import Card from "../Card/Card";

export default function Home(){
  const notices = [
    {title: "Notice 1", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf"},
    {title: "Notice 2", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf"},
    {title: "Notice 3", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf"},
    {title: "Notice 4", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf"},
  ]
  return (
    <div className={styles.home}>
      <div className={styles.headingTop}>
        News and Publication Society
      </div>
      <div className={styles.headingBottom}>
        Birla Institute of Technology
      </div>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div className={styles.noticesHeading}>
          <Link href="/notices" className={styles.notices}>Notices</Link>
          </div>
          {notices.map((notice, index)=>
          <div className={styles.noticeContainer} key={index}>
            <div className={styles.noticeTitle}>
            {notice.title}
            </div>
            <div className={styles.noticeSummary}>
              {notice.summary}
            </div>
          </div>
          )}
        </div>
        <div className={styles.col2}>
          <div className={styles.card}>
            <Image placeholder="blur" src={NapsLogo} layout="intrinsic" alt="random img"/>
            <div className={styles.description}> 
                <div className={styles.topic}>Sample Heading</div>
                <div className={styles.author}>By-ajanfjkadf</div>
                <div className={styles.date}>Date-dd/mm/yyyy</div>
                <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl 
                pretium fusce id. Dolor sed viverra ipsum nunc aliquet bibendum enim.
                </div>
            </div>
          </div>
        </div>
      </div>
    <div className={styles.search}>
      <input type="text" placeholder="search"/>
    </div>
    <div className={styles.cardGrid}>
    <Card heading="Lorem laborum aliquip deserunt voluptate culpa." 
    content="Voluptate mollit qui est ad fugiat incididunt esse magna. Amet sunt duis voluptate reprehenderit tempor culpa. Ut non non in excepteur ullamco. Deserunt sunt sit ut incididunt labore mollit. Incididunt mollit commodo ullamco excepteur excepteur consectetur proident ullamco. Dolor mollit nulla non aute ullamco fugiat adipisicing nisi labore officia."
    author="author" date="dd/mm/yy" image="not-now"/>
    <Card heading="Qui officia nisi nulla consectetur et voluptate laboris nisi excepteur nulla irure ex in." 
    content="Est duis officia ad ipsum ea in anim occaecat nulla cillum culpa eiusmod. Nostrud est commodo veniam excepteur et tempor deserunt id ad. Veniam labore laborum quis excepteur duis in adipisicing eu nisi sunt ad pariatur adipisicing. Reprehenderit id pariatur enim Lorem quis minim. Et et ipsum ipsum irure amet laboris dolore ex ullamco enim esse consectetur velit nostrud. Deserunt mollit nulla ullamco enim id elit. Aliquip qui ad ut occaecat aliqua reprehenderit reprehenderit velit deserunt occaecat."
    author="author" date="dd/mm/yy" image="not-now"/>
    <Card heading="Irure exercitation proident officia ex nulla sint qui fugiat elit non aute minim." 
    content="Duis ut elit consequat consequat magna ea eiusmod duis est veniam. Aliqua occaecat sunt quis voluptate cupidatat minim mollit mollit. Lorem nulla veniam minim nulla adipisicing fugiat esse veniam. Pariatur consectetur cupidatat amet cupidatat ipsum sunt ex culpa Lorem ullamco consequat anim consectetur. Magna non pariatur fugiat non."
    author="author" date="dd/mm/yy" image="not-now"/>
    <Card heading="Magna dolore tempor ipsum adipisicing culpa fugiat enim duis exercitation." 
    content="Incididunt voluptate laborum aute magna et qui ex exercitation. Nulla sint ea irure magna commodo aute amet amet minim cillum duis cillum. Ipsum duis velit deserunt irure ipsum sint nulla incididunt ea ullamco reprehenderit duis. Ullamco qui sint aliqua velit laboris ut deserunt irure. Labore consectetur enim minim aliqua. Non id sit dolor occaecat do officia non exercitation aliquip. Irure ea duis occaecat in reprehenderit cupidatat cillum laboris eiusmod dolor."
    author="author" date="dd/mm/yy" image="not-now"/>
    <Card heading="Aliqua voluptate sit officia nulla deserunt enim quis minim deserunt." 
    content="Sit cupidatat culpa eiusmod incididunt nisi. Duis ipsum consequat id consequat velit duis dolore veniam exercitation excepteur eu magna. Et commodo Lorem nulla id sunt adipisicing. Id fugiat aute do in adipisicing enim duis velit et."
    author="author" date="dd/mm/yy" image="not-now"/>
    <Card heading="In reprehenderit occaecat qui pariatur esse occaecat excepteur ut elit dolor dolor ad."
    content="Sint eiusmod exercitation duis mollit ullamco adipisicing proident ea reprehenderit cillum occaecat do qui id. Aute incididunt enim dolore laboris consectetur pariatur eu est do et pariatur deserunt cillum nisi. Pariatur ullamco dolore Lorem in esse ad eiusmod cillum ut veniam. Est aliqua ad veniam aute occaecat dolor reprehenderit veniam aliquip incididunt exercitation."
    author="author" date="dd/mm/yy" image="not-now"/>
    <Card heading="Incididunt dolor id ipsum dolore ad aute ad et non et fugiat aute qui duis."
    content="Officia id velit nisi elit nulla est officia eu amet dolore tempor ut. Tempor elit id et dolore nisi ut reprehenderit eu. Tempor consectetur et elit Lorem nulla ex occaecat fugiat ipsum veniam ex mollit."
    author="author" date="dd/mm/yy" image="not-now"/>
    <Card heading="Laborum irure laboris pariatur proident irure id magna mollit deserunt commodo laborum esse aliquip."
    content="Irure ea cillum incididunt ipsum mollit. Occaecat dolor dolore anim ad officia pariatur cupidatat pariatur aute id sint nostrud. Dolor aliqua duis exercitation fugiat duis dolor sit dolore elit cupidatat enim proident. Cillum aliqua labore tempor minim enim deserunt labore cillum magna consequat duis."
    author="author" date="dd/mm/yy" image="not-now"/>
    <Card heading="Consequat consectetur dolore quis esse voluptate cillum exercitation officia est."
    content="Qui voluptate minim culpa do non id est. Pariatur irure commodo pariatur reprehenderit deserunt amet in mollit sunt id. Aliquip ullamco irure veniam amet consequat incididunt eiusmod ea ad consectetur quis cillum et id. Sint est consectetur nulla id ad amet aute magna."
    author="author" date="dd/mm/yy" image="not-now"/>
    </div>
    </div>
  )
}