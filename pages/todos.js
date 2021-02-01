import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";

const Todo = (props) => (
  <Layout>
    <div>
      <p>User ID : {props.userId}</p>
      <p>ID      : {props.id}</p>
      <p>TITLE   : {props.title}</p>
      <p>COMPLETED     : {props.completed}</p>
    </div>
  </Layout>
);

Todo.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await res.json();
  
  return {
    userId: data.userId,
    id:data.id,
    title:data.title,
    completed:data.completed
  }
};

export default Todo;
