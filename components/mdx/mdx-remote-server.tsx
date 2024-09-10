import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';
import { serializeOptions } from './serialize-options';

const MdxRemoteServer = ({ source }: { source: string }) => {
  return (
    <article className="prose max-w-screen-lg mx-auto">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={serializeOptions}
      />
    </article>
  );
};

export default MdxRemoteServer;
