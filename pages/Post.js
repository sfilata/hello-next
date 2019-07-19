import { useRouter } from 'next/router';
import Layout from './components/MainLayout';
import Markdown from 'react-markdown';

const Page = () => {
  const router = useRouter();

  const markdownSource = `
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
      `;

  return (
    <Layout>
      <h2>{router.query.title}</h2>
      <div className="markdown">
        <Markdown source={markdownSource} />
      </div>
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

export default Page;