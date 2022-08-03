export interface ITreeNode {
	id: string;
	name: string;
	children: ITreeNode[] | [];
	isExpanded: boolean;
}
