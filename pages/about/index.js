import {useRouter} from 'next/router';
import { MainLayout } from '../../components/mainLayout';

export default function About({title}) {
  const router = useRouter()
  const linkClickHandler = () => {
    router.push('/');
  };
  return (
    <MainLayout title={'about'}>
      <h1> Abouts {title} </h1>
      <button onClick={linkClickHandler}> go back to home</button>
    </MainLayout>
  );
}
About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await  response.json();
  return {
    title :data.title
  }
}
