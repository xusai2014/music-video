// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
const proxy = httpProxy.createProxyServer({});

type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	// res.status(200).json({ name: "John Doe" });
	//res.send(`req.url: "${req.url}"`);
	req.url =
		"https://v3-web.douyinvod.com/4dc69ad300befb144105b7f065107f67/61d892e7/video/tos/cn/tos-cn-ve-15-alinc2/80921b95859d4eed93defb522f03fb14/?a=6383&br=1160&bt=1160&cd=0%7C0%7C0&ch=5&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=OyFYlOZZI0J.17Tz7Th9Ixn_pbsdC7INHqY&l=20220108022205010133044171124478B2&lr=all&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am5saTY6Zm53OjMzNGkzM0ApZztoNzc3NDs3Nzo8NzxmNGdwaDEvcjRnZDRgLS1kLTBzczZgYl4vMWAuLS4tXi80X2E6Yw%3D%3D&vl=&vr=";

	return proxy.web(req, res, {
		target: "http://v3-web.douyinvod.com",
		headers: {
			Host: "v3-web.douyinvod.com",
			Referer: req.url
		},
		secure: false
	});
}
