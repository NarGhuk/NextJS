import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Router from 'next/router';
// import Link from 'next/link';
import { MainLayout } from '../../components/mainLayout';

export default function Post({ post: serverPost }) {

  const router = useRouter();
  const [post, setPost] = useState(serverPost);
  const linkClickHandler = () => {
    Router.push('/');
  };

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
      const post = await response.json();
      setPost(post);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }
if(!Object.keys(post).length ){
  return <>
    <h1> ter are  not  posts</h1>
    <button onClick={linkClickHandler}> Go back to home</button>
    </>
}

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p> author - {post.author} </p>
        <p>{post.body}</p>
      </div>
      <button onClick={linkClickHandler}> Go back to home</button>
    </>
  );
}
// Post.getInitialProps = async ({ query, req }) => {
//   console.log('asd',query);
//   if (!req) {
//     return { post: null };
//   }
//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();
//   return {
//     post,
//   };
// };

export async function getServerSideProps({ query, req }) {
  console.log('asd',query);
  // if (!req) {
  //   return { post: null };
  // }
  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post = await response.json();
  return { props:{post}};
}
