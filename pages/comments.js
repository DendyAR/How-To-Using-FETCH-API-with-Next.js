import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";

const Comment = (props) => (
  <Layout>
    <div>
      <p>Post Id : {props.postId}</p>
      <p>ID      : {props.id}</p>
      <p>NAME   : {props.name}</p>
      <p>Email   : {props.email}</p>
      <p>BODY   : {props.body}</p>
    </div>
  </Layout>
);

Comment.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/comments/1");

  const data = await res.json();
  
  return {
    postId: data.postId,
    id:data.id,
    name:data.name,
    email:data.email,
    body:data.body,
  }
};

export default Comment;
