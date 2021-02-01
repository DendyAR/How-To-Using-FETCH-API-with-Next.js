import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";

const Post = (props) => (
  <Layout>
    <div>
      <p>User ID : {props.userId}</p>
      <p>ID      : {props.id}</p>
      <p>TITLE   : {props.title}</p>
      <p>BODY     : {props.body}</p>
    </div>
  </Layout>
);

Post.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/posts/1");

  const data = await res.json();
  
  return {
    userId: data.userId,
    id:data.id,
    title:data.title,
    body:data.body
  }
};

export default Post;
