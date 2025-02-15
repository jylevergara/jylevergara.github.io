export const portfolioData = [
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/gmg.png',
		title: 'Grail Management Group',
		skills: ['React', 'StyledComponents'],
		description:
			'Property Management Website',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/paraoa-freediving.png',
		title: 'E-commerce',
		skills: ['JavaScript', 'Bootstrap'],
		description:
			' Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/met-museum-collection.png',
		title: 'Met Museum Collection',
		skills: ['React', 'CSS'],
		description:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: 'https://museum-collection-app-roan.vercel.app',
		repoURL: 'https://github.com/jylevergara/museum-collection-app',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/bmg.png',
		title: 'Boost Media Group',
		skills: ['React', 'CSS'],
		description:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/cosource.png',
		title: 'Cosource',
		skills: ['React', 'CSS'],
		description:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/statusphere.png',
		title: 'Statusphere',
		skills: ['Nodejs', 'React', 'Nodejs', 'MaterialUI'],
		description:
			'Influencer marketing tech',
		demoURL: 'https://joinstatus.com',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/cypresscovemarina.png',
		title: 'Cypress Cove Marina',
		skills: ['React', 'Nodejs', 'MaterialUI'],
		description:
			'Hospitality and recreation website',
		demoURL: 'https://cypresscovemarina.wixsite.com/lakeviewhouse',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/statusphere.png',
		title: 'Statusphere',
		skills: ['React', 'Nodejs', 'MaterialUI'],
		description:
			'Influencer marketing tech',
		demoURL: 'https://joinstatus.com',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://portfolio-photos-1896ddf1.s3.us-east-1.amazonaws.com/statusphere.png',
		title: 'Statusphere',
		skills: ['React', 'Nodejs', 'MaterialUI'],
		description:
			'Influencer marketing tech',
		demoURL: 'https://joinstatus.com',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	MaterialUI: 'skill-icons:materialui',
	Nodejs: 'skill-icons:nodejs',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

export const getPortfolioData = portfolioData.map((item) => {
	return {
		...item,
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
