/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare interface Job {
	id: number;
	company_name: string;
	position: string;
	duration: string[];
	location: string;
	worked_with: string[];
	description: string;
	image_src?: string;
}

declare interface Page {
	overview: {
		title: string;
		blob: string[];
	};
	segments: {
		title: string;
		blob: string[];
	}[];
}

declare interface ActionItem {
	label: string;
	onClick?: () => void;
}

declare interface LinkItem {
	label: string;
	link: string;
}