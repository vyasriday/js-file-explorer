import { ITreeNode } from './types';

export const treeData: ITreeNode[] = [
	{
		id: Math.floor(Math.random() * 100000).toString(),
		name: 'Home',
		children: [
			{
				id: Math.floor(Math.random() * 100000).toString(),
				name: 'Resume.pdf',
				children: [],
				isExpanded: true,
			},
			{
				id: Math.floor(Math.random() * 100000).toString(),
				name: 'Docs',
				children: [
					{
						id: Math.floor(Math.random() * 100000).toString(),
						name: 'Experience Letter.txt',
						children: [],
						isExpanded: true,
					},
				],
				isExpanded: true,
			},
		],
		isExpanded: true,
	},
	{
		id: Math.floor(Math.random() * 100000).toString(),
		name: 'Downloads',
		children: [],
		isExpanded: true,
	},
	{
		id: Math.floor(Math.random() * 100000).toString(),
		name: 'Documents',
		children: [],
		isExpanded: true,
	},
	{
		id: Math.floor(Math.random() * 100000).toString(),
		name: 'Music',
		children: [],
		isExpanded: true,
	},
	{
		id: Math.floor(Math.random() * 100000).toString(),
		name: 'Trash',
		children: [],
		isExpanded: true,
	},
];
