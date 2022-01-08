import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import Video from "../componets/video";
const Home: NextPage = () => {
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
					欢迎来到<a href="/">音乐碎片</a>
				</h1>
				<p className={styles.description}>痴情的耳朵会怀孕！</p>

				<div className={styles.grid}>
					<Video></Video>
					{[].map(() => {
						return (
							<a
								href="https://nextjs.org/docs"
								className={styles.card}
							>
								<h2>Documentation &rarr;</h2>
								<p>
									Find in-depth information about Next.js
									features and API.
								</p>
							</a>
						);
					})}
				</div>
			</main>

			<footer className={styles.footer}>
				<a href="/" target="_blank" rel="noopener noreferrer">
					{"屮急急 "}出品
				</a>
			</footer>
		</div>
	);
};

export default Home;
