import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";
import Video from "../componets/video";
import Link from "next/link";
import fetcher from "../lib/fetcher";
import { BASE_URL } from "../lib/CONSTANTS";
const Home: NextPage = ({data}) => {
	const { articleList = [] } = data;
	return (
		<div className={styles.container}>
			<Head>
				<title>音乐碎片</title>
				<meta
					name="description"
					content="音乐碎片｜梦里的声音｜民谣｜纯音乐｜情歌｜触动内心"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					欢迎来到<Link href="/">音乐碎片</Link>
				</h1>
				<p className={styles.description}>痴情的耳朵会怀孕！</p>

				<div className={styles.grid}>
					<Video />
					{articleList?.map((item: any, index:number) => {
						return (
							<Video source={item.t_video} key={item.id || index} />
						);
					})}
				</div>
			</main>

			<footer className={styles.footer}>
				<Link passHref={true} href="/">
					<a target="_blank" rel="noopener noreferrer">
						{"屮急急 "}出品
					</a>
				</Link>
			</footer>
		</div>
	);
};

export async function getServerSideProps() {
	const data = await fetcher(`${BASE_URL}/api/article/videolist`, ).then((result) => {

		console.log(result, 'results')

		if (result.data) {
			return  result.data?.data
		}
		return {}
	})
	return {
		props: {
			data: data || {}
		}
	}
}

export default Home;
