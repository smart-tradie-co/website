const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://smarttradieco.com";

export const siteConfig = {
	title: "Smart Tradie Co",
	author: "Smart Tradie Co",
	url: SITE_URL,
	utm: {
		source: SITE_URL,
		medium: "referral",
		campaign: "navigation",
	},
	meta: {
		title: "Smart Tradie Co | Helping tradies build smarter businesses",
		description: "Helping tradies build smarter businesses.",
		keywords: "Smart Tradie Co, tradies, trade business, business growth",
		image: `${SITE_URL}/assets/preview.jpg`,
		twitterHandle: "",
	},
	social: {
		github: "https://github.com/smart-tradie-co/website",
	},
};
