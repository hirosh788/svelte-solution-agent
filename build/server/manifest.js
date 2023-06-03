const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/bootstrap.css","css/custom.css","css/jquery.mCustomScrollbar.min.css","css/utils.css","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-e465e18c.js","imports":["_app/immutable/start-e465e18c.js","_app/immutable/chunks/index-d081bc00.js","_app/immutable/chunks/singletons-1e197297.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-7f1fb4de.js'),
			() => import('./chunks/1-614215c1.js'),
			() => import('./chunks/2-4b43b11f.js'),
			() => import('./chunks/3-24bb9cfb.js'),
			() => import('./chunks/4-adc98d1d.js'),
			() => import('./chunks/5-27397511.js'),
			() => import('./chunks/6-fc393b9c.js'),
			() => import('./chunks/7-450216cf.js'),
			() => import('./chunks/8-6958a56d.js'),
			() => import('./chunks/9-8b4b4a75.js'),
			() => import('./chunks/10-3e36ace0.js'),
			() => import('./chunks/11-adc93c17.js'),
			() => import('./chunks/12-7d77a0f3.js'),
			() => import('./chunks/13-d42cc147.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/agent-list",
				pattern: /^\/agent-list\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/current-member",
				pattern: /^\/current-member\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/deposit",
				pattern: /^\/deposit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/event-point-list-agent",
				pattern: /^\/event-point-list-agent\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/event-point-list",
				pattern: /^\/event-point-list\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/member-bet",
				pattern: /^\/member-bet\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/member-list",
				pattern: /^\/member-list\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/mile-change",
				pattern: /^\/mile-change\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/mile-profit",
				pattern: /^\/mile-profit\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/withdraw",
				pattern: /^\/withdraw\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
