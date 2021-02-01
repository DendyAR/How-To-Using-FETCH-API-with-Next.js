import Image from "next/image"
import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";

const Photo = (props) => (
  <Layout>
    <div>
      <p>AlbumId : {props.albumId}</p>
      <p>ID      : {props.id}</p>
      <p>TITLE   : {props.title}</p>
      <img src={props.url}/>Ini Gambar Url <br></br>
      <img src={props.thumbnailUrl}/>Ini Gambar ThumbnailUrl
    </div>
  </Layout>
);

Photo.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/photos/1");

  const data = await res.json();
  
  return {
    albumId: data.albumId,
    id:data.id,
    title:data.title,
    url:data.url,
    thumbnaillUrl:data.thumbnailUrl
  }
};

export default Photo;
