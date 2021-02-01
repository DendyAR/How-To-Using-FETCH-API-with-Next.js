import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";

const Album = (props) => (
  <Layout>
    <div>
      <p>User ID : {props.userId}</p>
      <p>ID      : {props.id}</p>
      <p>TITLE   : {props.title}</p>
    </div>
  </Layout>
);

Album.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/albums/1");

  const data = await res.json();
  
  return {
    userId: data.userId,
    id:data.id,
    title:data.title,
  }
};

export default Album;
