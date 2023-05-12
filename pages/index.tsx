import styles from "./Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Card from "../components/Card/Card";
import Head from "next/head";
import { GetStaticProps } from "next";
type apiData = {
  _id: string;
  title: string;
  author: string;
  authorName: string;
  tags: string[];
  category: string;
  createdAt: string;
  thumbnail: string;
  summary: string;
};
type notice = {
  _id: string;
  title: string;
  content: string;
  links: string[];
  DateAdded: string;
};

export default function Home({
  data,
  noticeData,
}: {
  data: apiData[];
  noticeData: notice[];
}) {
  const newBlogs = data.slice(1);
  const topBlog = data[0];
  const showableDate = (date) => {
    const dateToFormat = new Date(date);
    var dd = String(dateToFormat.getDate()).padStart(2, "0");
    var mm = String(dateToFormat.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = dateToFormat.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  };
  return (
    <div className={styles.home}>
      <Head>
        <title>Home | Naps</title>
      </Head>
      <div className={styles.headingTop}>
        News and Publication Society
      </div>
      <div className={styles.headingBottom}>
        Birla Institute of Technology
      </div>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <Link href="/Epistle" passHref>
            <div className="flex items-center ml-2 cursor-pointer w-max text-red-500 font-bold text-center border-b-2 border-slate-800 text-2xl ">
              Notices
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </div>
          </Link>
          {noticeData.slice(0, 3).map((notice, index) => (
            <div
              className="border shadow-sm rounded-lg mx-auto hover:shadow-md transition-all duration-200 my-4 p-4 border-slate-100 break-words"
              key={index}>
              <div className="font-bold text-slate-800 text-lg break-words">
                {notice.title}
              </div>
              <div className="font-light break-words">{notice.content}</div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className={styles.card}>
            <div className={styles.topBlogImage}>
              <Image
                src={topBlog.thumbnail}
                layout="fill"
                alt="random img"
              />
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold">
                <Link href={`/blog/${topBlog._id}`}>
                  {topBlog.title}
                </Link>
              </div>
              <div className="font-semibold text-lg">
                <Link
                  href={`/Author/${topBlog.author}`}>{`By- ${topBlog.authorName}`}</Link>
              </div>
              <div className="font-light">
                Date-{showableDate(topBlog.createdAt)}
              </div>
              <div className="font-light">{topBlog.summary}</div>
              <Link href={`/blog/${topBlog._id}`} passHref>
                <div className="w-max flex my-4 cursor-pointer items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-sm rounded-lg border-2 border-slate-100 font-extrabold p-4 w-full my-20 text-2xl text-center">
        New Posts
      </div>
      <div className={styles.cardGrid}>
        {newBlogs.map((blog) => (
          <Card
            authorId={blog.author}
            category={blog.category}
            id={blog._id}
            title={blog.title}
            summary={blog.summary}
            author={blog.authorName}
            date={blog.createdAt}
            key={blog._id}
            image={blog.thumbnail}></Card>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.APIBASE}/blog/new`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  var data = await res.json();
  const url = `${process.env.NEXT_PUBLIC_APIBASE}/epistle/Notice?page=1`;
  const res2 = await fetch(url);
  var noticeData = await res2.json();
  noticeData = noticeData?.data[0]?.notices;
  return {
    props: { data, noticeData },
    revalidate: 120,
  };
};
