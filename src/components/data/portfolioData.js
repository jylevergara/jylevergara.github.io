export const portfolioData = [
	// {
	// 	imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/met-museum-collection.png',
	// 	title: 'Met Museum Collection',
	// 	skills: ['Nextjs', 'Bootstrap','CSS'],
	// 	description:
	// 		'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
	// 	demoURL: 'https://museum-collection-app-roan.vercel.app',
	// 	repoURL: 'https://github.com/jylevergara/museum-collection-app',
	// 	anim: 'fade-left',
	// },
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/statusphere.png',
		title: 'Statusphere',
		skills: ['JavaScript', 'React', 'Nodejs', 'MaterialUI', 'PostgreSQL'],
		description:
			'Influencer marketing tech',
		demoURL: 'https://joinstatus.com',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/fleat-web.png',
		title: 'Fleat',
		skills: ['JavaScript','React', 'Nodejs', 'MaterialUI'],
		description:
			'Intelligent mobile retail platform',
		demoURL: 'https://fleat.net',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/codehangar.png',
		title: 'Code Hangar',
		skills: ['React', 'Nodejs', 'MaterialUI'],
		description:
			'App development agency',
		demoURL: 'https://codehangar.io',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/bmg.png',
		title: 'Boost Media Group',
		skills: ['Wordpress', 'CSS'],
		description:
			'Digital marketing agency',
		demoURL: 'https://boostmediagroup.com',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/hobbygoblin.png',
		title: 'Hobbygoblin',
		skills: ['React', 'HTML', 'CSS'],
		description:
			'Board game matchmaking app',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/gmg.png',
		title: 'Grail Management Group',
		skills: ['HTML', 'CSS'],
		description:
			'Property management website',
		demoURL: 'https://www.grailmanagement.com/',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/paraoa-freediving.png',
		title: 'Paraoa freediving',
		skills: ['Wordpress', 'CSS'],
		description:
			'Small business website',
		demoURL: 'https://paraoa-freediving.com',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/cosource.png',
		title: 'CoSource',
		skills: ['Wordpress', 'CSS'],
		description:
			'Virtual talent solutions',
		demoURL: 'https://cosource.us',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/cypresscovemarina.png',
		title: 'Cypress Cove Marina',
		skills: ['React', 'Nodejs', 'MaterialUI'],
		description:
			'Hospitality and recreation website',
		demoURL: 'https://www.cypresscoveclermont.com/',
		repoURL: '',
		anim: 'fade-right',
	},
];

const skillIcons = {
	Astro: 'skill-icons:astro',
	Bootstrap: 'skill-icons:bootstrap',
	CSS: 'skill-icons:css',
	JavaScript: 'skill-icons:javascript',
	HTML: 'skill-icons:html',
	MaterialUI: 'skill-icons:materialui-dark',
	Nextjs: 'skill-icons:nextjs-dark',
	Nodejs: 'skill-icons:nodejs-dark',
	PostgreSQL: 'skill-icons:postgresql-dark',
	React: 'skill-icons:react-dark',
	StyledComponents: 'skill-icons:styledcomponents',
	Sass: 'skill-icons:sass',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Wordpress: 'skill-icons:wordpress'
};


export const getPortfolioData = portfolioData.map((item) => {
	return {
		...item,
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
