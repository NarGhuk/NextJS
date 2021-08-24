import Link from 'next/link' ;
import { MainLayout } from '../components/mainLayout';
import classes from '../styles/error.module.css';
export default function ErrorPage()
{
  return (
    <MainLayout>
      <h1 className={classes.error_title}> Error 404</h1>
      <p className={classes.error_desc}>please <Link href={'/'}><a>go to back safety</a></Link></p>
    </MainLayout>
  );
}
