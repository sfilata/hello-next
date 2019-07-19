import Link from 'next/link';
import Layout from './components/MainLayout';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
  <li key={props.id}>
    <Link href={`/blog/[id]`} as={`/blog/${props.id}`}>
      <a>{props.name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Index = props => (
  <div>
    <Layout>
      <h2>Batman TV shows</h2>
      <ul>
        {props.shows.map(item => (
          <PostLink key={item.id} id={item.id} name={item.name} />
        ))}
      </ul>
      <style jsx>{`
        h2,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  </div>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log('neil-log', 'fetch Data', data);

  return {
    shows: data.map(item => item.show)
  };
}

export default Index;