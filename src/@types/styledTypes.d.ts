import 'styled-components';

declare module 'styled-components' {

	export interface DefaultTheme {

		color: {

			main: {

				background: string;
				selection: string;
				comment: string;
				white: string;

				textColor: string;
				fadeTextColor: string;

				reverseAccent: string;

				modalBackground: string;
			},
			gray: {

				default: string,
				bright: string,
			},
			cold: {

				blue: string,
				blueBright: string,
			},
			hot: {

				redBright: string,
			},
			social: {

				linkedin: string;
				github: string;
				instagram: string;
			},
		},

		effect: {

			containerShadow: string;
			itemShadow: string;
			textShadow: string;
		}
	}
}
