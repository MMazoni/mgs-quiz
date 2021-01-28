import Head from 'next/head'
import db from '../../../db.json';

export default function Header() {
    return (
        <Head>
            <title>{db.title}</title>
            <meta property="og:title" content={db.title} key="title"/>
            <meta property="og:image" content={db.bg} key="image"/>
            <meta property="og:description" content={db.description} key="description"/>
        </Head>
    )
}