export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/bootstrap.css","css/custom.css","css/jquery.mCustomScrollbar.min.css","css/utils.css","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-e465e18c.js","imports":["_app/immutable/start-e465e18c.js","_app/immutable/chunks/index-d081bc00.js","_app/immutable/chunks/singletons-1e197297.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js')
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

export const prerendered = new Set([]);
