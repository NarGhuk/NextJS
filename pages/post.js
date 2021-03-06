import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { MainLayout } from '../components/mainLayout';

export default function Post({postss}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      setPosts(postss);
  }, [posts]);
  console.log(posts);
  return (
    <MainLayout>
      <Head>
        <title>Post Page</title>
        <meta name="keywords" content="asd,asd,asd,asd"/>
        <meta name="description" content="Generated by create next app"/>
      </Head>
      <div className={styles.container}>
        <div>
          <h1>Post Page</h1>
          <p><Link href={'/about'}><a>About</a></Link></p>
          <p><Link href={'/posts/12'}><a>Post</a></Link></p>
          <p><Link href={'/'}><a>Home</a></Link></p>
        </div>
        <div className={'view-data'}>
          {
            posts.map(({ id, title, author, body }) => (
              <div key={id}>
                <h1>{title}</h1>
                <p> author - {author} </p>
                <p>{body}</p>
                <Link href={`/posts/${id}`}><a>post</a></Link>
              </div>
            ))
          }
        </div>
      </div>
    </MainLayout>
  );
}

Post.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const postss = await response.json();
  return {
    postss,
  };
};
