import "video.js/dist/video-js.min.css";
import videojs from "video.js";

import { useEffect, useRef } from "react";
export default () => {
	const vRef = useRef<HTMLElement>(null);
	useEffect(() => {
		if (vRef?.current) {
			const player = videojs(
				vRef.current || "video",
				{
					autoplay: true
				},
				function onPlayerReady() {
					videojs.log("Your player is ready!");

					// In this context, `this` is the player that was created by Video.js.
					this.play();

					// How about an event listener?
					this.on("ended", function () {
						videojs.log("Awww...over so soon?!");
					});
				}
			);
		}
	}, []);
	return (
		<video
			id="my-video"
			ref={vRef}
			className="video-js"
			controls
			preload="auto"
			width="640"
			height="264"
			poster="MY_VIDEO_POSTER.jpg"
			data-setup="{}"
		>
			<source src="/api/hello" type="video/mp4" />

			<p className="vjs-no-js">
				To view this video please enable JavaScript, and consider
				upgrading to a web browser that
				<a
					href="https://videojs.com/html5-video-support/"
					target="_blank"
				>
					supports HTML5 video
				</a>
			</p>
		</video>
	);
};
