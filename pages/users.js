import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";


const User = (props) => (
  <Layout>
    <div>
      <p>Id : {props.id}</p>
      <p>NAME      : {props.name}</p>
      <p>USERNAME   : {props.username}</p>
      <p>EMAIL   : {props.email}</p>
      <div>ADDRESS   : 
        <p>STREET: {props.address.street}</p>
        <p>SUITE: {props.address.suite}</p>
        <p>CITY: {props.address.city}</p>
        <p>ZIP CODE: {props.address.zipcode}</p>
        <ul>GEO :
          <li>LAT: {props.address.geo.lat}</li>
          <li>LNG: {props.address.geo.lng}</li>
        </ul>
      </div>
    </div>
  </Layout>
);

User.getInitialProps = async function () {
  const res = await Fetch("https://jsonplaceholder.typicode.com/users/1");

  const data = await res.json();
  
  return {
    id: data.id,
    name:data.name,
    username:data.username,
    email:data.email,
    address:data.address,
    // name:data.name,
    // body:data.body,
  }
};

export default User;
