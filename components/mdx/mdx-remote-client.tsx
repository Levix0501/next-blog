'use client';

import { MDXRemote } from 'next-mdx-remote';
import { mdxComponents } from './mdx-components';

const MdxRemoteClient = ({ compiledSource }: { compiledSource: string }) => {
  return (
    <article className="prose max-w-screen-lg mx-auto">
      <MDXRemote
        compiledSource={compiledSource}
        components={mdxComponents}
        scope={undefined}
        frontmatter={undefined}
      />
    </article>
  );
};

export default MdxRemoteClient;
