console.log('Connected even in TS');
import { ITreeNode } from './types';
import { treeData } from './data';

renderUI();

function renderUI() {
	let container = document.getElementById('file-tree-container');
	let treeUI = createFileTree(treeData);
	if (container) container.innerHTML += treeUI;
	addListenerOnNodes();
}

/**
 *
 * @param treeData Array of ITreeNode
 * @returns Tree UI
 * @description The job of this function is to take array of tree node objects and return a tree UI. That's it. It loops of array and creates a treenode for each object. The node can have children but that's not the job of this function.
 */
function createFileTree(treeData: ITreeNode[]) {
	let fileTree = treeData.map((node) => createTreeNode(node));
	return fileTree.join('');
}

/**
 *
 * @param node Tree node of type ITreeNode
 * @returns tree node ui along with children if any
 * @description The job of this function is to render node ui for a given node data. If a node has children this will call createFileTree to recursively create smaller file tree inside it.
 */
function createTreeNode(node: ITreeNode): string {
	const hasChildren = node.children.length > 0;
	let icon: string;
	if (!hasChildren) {
		icon = 'fa fa-file';
	} else if (hasChildren && node.isExpanded) {
		icon = 'fa fa-folder-open';
	} else {
		icon = 'fa fa-folder';
	}
	let nodeHTML = `<li class="node-container">
				<i class="${icon}" aria-hidden="true"></i>
				<span class="node-title">${node.name}</span>
			${
				hasChildren
					? `
							<ul style="display='none'">
								${createFileTree(node.children)}
							</ul>
						`
					: ''
			}
			</div>
		</li>
  `;

	return nodeHTML;
}

function addListenerOnNodes() {
	let nodeContainerNodes = document.querySelectorAll('.node-container');
	nodeContainerNodes.forEach((nodeContainer) =>
		nodeContainer.addEventListener('click', onClickHandler)
	);
}

function onClickHandler(e) {
	/**
	 * The job of onClick handler is to
	 * 1. get the clicked node ->  Done
	 * 2. update the expanded state of that node if it has children -> Pending
	 */
	e.stopPropagation();

	// remove selected node from all other nodes and add on one that's selected
	const treeNodes = document
		.getElementById('file-tree-container')
		?.querySelectorAll('li.node-container');
	treeNodes?.forEach((node) => node.classList.remove('selected-node'));
	e.target.parentElement.classList.add('selected-node');
	if (e.target.parentElement.hasChildNodes()) {
		let ul = e.target.parentElement.querySelector('ul');
		if (ul && ul.style.display === 'block') {
			ul.style.display = 'none';
		} else {
			ul.style.display = 'block';
		}
	}
}
