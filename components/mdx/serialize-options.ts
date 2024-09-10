import highlight from 'rehype-highlight';
import { visit } from 'unist-util-visit';

export const serializeOptions = {
	parseFrontmatter: true,
	mdxOptions: {
		rehypePlugins: [
			() => (tree: any) => {
				visit(tree, (node) => {
					if (node?.type === 'element' && node?.tagName === 'pre') {
						const [codeEl] = node.children;
						if (codeEl.tagName !== 'code') {
							return;
						}
						node.properties['__raw__'] = codeEl.children?.[0]?.value;
					}
				});
			},
			highlight
		]
	}
};
