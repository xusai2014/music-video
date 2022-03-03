// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
const proxy = httpProxy.createProxyServer({});

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// res.status(200).json({ name: "John Doe" });
	//res.send(`req.url: "${req.url}"`);
	req.url =
		"https://www.douyin.com/aweme/v1/play/?aid=6383&app_name=aweme&channel=channel_pc_web&device_platform=web&did=0&file_id=30e7d21f810940fdaa9a802f7e6db8ca&fp=verify_kyi6yfx8_STNcXLoq_GfZs_4JXx_BGFh_y19vcMZ6N8z0&is_play_url=1&line=0&referer=https%3A%2F%2Fwww.douyin.com%2Fvideo%2F7020764246476590339&sign=ef6effe0c1679572042461f21d6f2673&source=PackSourceEnum_AWEME_DETAIL&target=7020764246476590339&user_agent=Mozilla%2F5.0%20%28Macintosh%3B%20Intel%20Mac%20OS%20X%2010_16_0%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F74.0.3729.169%20Safari%2F537.36&video_id=v0300fg10000c5nc743c77u3sfnv06j0&webid=7052930793195013644";

	return proxy.web(req, res, {
		target: "http://www.douyin.com",
		headers: {
			Host: "www.douyin.com",
			Referer: req.url
		},
		secure: false
	});
}
