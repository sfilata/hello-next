import fetch from 'isomorphic-unfetch';
import Layout from '../components/MainLayout';

const Post = (props) => {
  return (
    <Layout>
      <h1>{ props.show.name }</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium} />
    </Layout>
  )
}

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log('neil-log', show.name);

  return { show };
}

export default Post;