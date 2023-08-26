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
		"https://v21zhg6zudvl4trx75wdgfc5yxvora4sm.free-lbv3.idouyinvod.com/v3-web.douyinvod.com/7c9a2568eae6d90e06a669520db4f588/64e9823b/video/tos/cn/tos-cn-ve-15/b92a088c373d4a4c9f64bc70bffde6c6/?a=6383&ch=0&cr=0&dr=0&er=0&cd=0%7C0%7C0%7C0&cv=1&br=903&bt=903&cs=0&ds=3&ft=GN7rKGVVywIiRZm8Zmo~ySqTeaApMw_16vrKFNGVSto0g3&mime_type=video_mp4&qs=0&rc=ZDtnaGkzZGRnMzw0aTU6M0BpMzl5aTY6ZjdmODMzNGkzM0BgXzM0LzU2XmMxLTUuYWIwYSNnLWtwcjQwNGtgLS1kLTBzcw%3D%3D&btag=e00028000&dy_q=1693021159&l=202308261139191C8D89E85494D54AE0F0&ali_redirect_ex_hot=66666800&ali_redirect_ex_beacon=1";

	return proxy.web(req, res, {
		target: "http://www.douyin.com",
		headers: {
			Host: "www.douyin.com",
			Referer: req.url
		},
		secure: false
	});
}
