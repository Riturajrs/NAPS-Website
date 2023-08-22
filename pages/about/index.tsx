import Image from "next/image"
import logo from "../../media/napslogo.png"
import { useInView } from "react-intersection-observer";
import aboutStyles from "./about.module.css";

const animationOptions = {
  threshold: 1
}

export default function AboutUs() {
  return (
    <div className="flex flex-col m-8 sm:mx-10 mb-16 md:mt-36 md:mx-24">
      <div className="flex flex-col-reverse gap-4 md:flex-row mx-4 justify-around">
        <div className="text-6xl sm:text-8xl font-bold gap-8 flex flex-col justify-center text-center">
          About Us
        </div>
        <div className="relative h-48 w-full md:h-48 md:w-64">
          <Image src={logo} alt={"Logo"} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="m-4 my-12">
        We, here at News and Publication Society, believe in unbiased and
        transparent coverage of all college-related events. It is always our
        endeavor to bring to our readers' news fresh and complete in detail.
        Whether it be a jazzy cultural extravaganza or a technical session of
        scientific importance, we make sure that we keep you updated on the
        goings-on in the various spheres that our institution is involved in.
        Besides the attractive opportunities on the academic front, the
        institute offers you a whole range of club activities. The lives of
        the students are defined by the student clubs they are a part of. At
        the News and Publication Society, we strive to ensure that every bit
        of life on this beautiful campus is portrayed with utmost sincerity,
        and our newsletter is the culmination of the same. Moreover, the many
        events organized by various clubs and societies that take place
        throughout the academic year help you develop skills outside of
        academics and also let you unwind from the routine life of classes and
        assignments. The NAPS team consists of members across all batches and
        years, with all having one factor in common: journalism in blood. We
        report all that happens on campus, get the campus buzz to the outside
        media, share opinions on topics of general knowledge, and interview
        influential personalities that drop by in college. Our primary aim is
        to keep you updated and help you make the most of what your college
        has to offer you while also helping you make informed decisions
        through the experiences of people who have been successful in some of
        the other walks of life. This is the fourth pillar of BIT Mesra which
        highlights the technical activities of student's club/ student bodies
        and departments at local, national, and international levels with the
        support of online social media and media houses.
      </div>
      <div className="mt-8">
        <h1 className="mx-auto text-3xl font-bold text-center mb-8">
          What we do
        </h1>
        <ScaleUpCard>
          <div className="font-semibold text-xl">
            Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure
            exercitation Lorem.
          </div>
          <div className="">
            Do reprehenderit laborum cillum ad veniam do anim commodo culpa.
            Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem
            cillum ad dolore sit officia. Laboris aliquip anim labore dolor
            est in ex laborum ut laborum nostrud do ut nostrud.
          </div>
        </ScaleUpCard>
        <ScaleUpCard>
          <div className="font-semibold text-xl">
            Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure
            exercitation Lorem.
          </div>
          <div className="">
            Do reprehenderit laborum cillum ad veniam do anim commodo culpa.
            Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem
            cillum ad dolore sit officia. Laboris aliquip anim labore dolor
            est in ex laborum ut laborum nostrud do ut nostrud.
          </div>
        </ScaleUpCard>
        <ScaleUpCard>
          <div className="font-semibold text-xl">
            Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure
            exercitation Lorem.
          </div>
          <div className="">
            Do reprehenderit laborum cillum ad veniam do anim commodo culpa.
            Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem
            cillum ad dolore sit officia. Laboris aliquip anim labore dolor
            est in ex laborum ut laborum nostrud do ut nostrud.
          </div>
        </ScaleUpCard>
        <ScaleUpCard>
          <div className="font-semibold text-xl">
            Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure
            exercitation Lorem.
          </div>
          <div className="">
            Do reprehenderit laborum cillum ad veniam do anim commodo culpa.
            Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem
            cillum ad dolore sit officia. Laboris aliquip anim labore dolor
            est in ex laborum ut laborum nostrud do ut nostrud.
          </div>
        </ScaleUpCard>
        <ScaleUpCard>
          <div className="font-semibold text-xl">
            Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure
            exercitation Lorem.
          </div>
          <div className="">
            Do reprehenderit laborum cillum ad veniam do anim commodo culpa.
            Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem
            cillum ad dolore sit officia. Laboris aliquip anim labore dolor
            est in ex laborum ut laborum nostrud do ut nostrud.
          </div>
        </ScaleUpCard>
        <ScaleUpCard>
          <div className="font-semibold text-xl">
            Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure
            exercitation Lorem.
          </div>
          <div className="">
            Do reprehenderit laborum cillum ad veniam do anim commodo culpa.
            Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem
            cillum ad dolore sit officia. Laboris aliquip anim labore dolor
            est in ex laborum ut laborum nostrud do ut nostrud.
          </div>
        </ScaleUpCard>
        <ScaleUpCard>
          <div className="font-semibold text-xl">
            Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure
            exercitation Lorem.
          </div>
          <div className="">
            Do reprehenderit laborum cillum ad veniam do anim commodo culpa.
            Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem
            cillum ad dolore sit officia. Laboris aliquip anim labore dolor
            est in ex laborum ut laborum nostrud do ut nostrud.
          </div>
        </ScaleUpCard>
        <ScaleUpCard>
          <div className="font-semibold text-xl">
            Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure
            exercitation Lorem.
          </div>
          <div className="">
            Do reprehenderit laborum cillum ad veniam do anim commodo culpa.
            Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem
            cillum ad dolore sit officia. Laboris aliquip anim labore dolor
            est in ex laborum ut laborum nostrud do ut nostrud.
          </div>
        </ScaleUpCard>
      </div >
    </div >
  );
}


const ScaleUpCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ref, inView] = useInView(animationOptions)
  return (
    <div ref={ref} className={aboutStyles.card}>
      <div className={aboutStyles.cardBar}></div>
      <div
        className={`${aboutStyles.cardContent} ${inView ? "shadow-md" : "shadow-sm"
          }`}
        style={
          inView
            ? { transform: "scale(1.0)" }
            : { transform: "scale(0.9)" }
        }
      >
        {children}
      </div>
    </div>

  )
}
