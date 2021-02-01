import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
      <li>
        <Link href="/comments">
          <a>Comments</a>
        </Link>
      </li>
      <li>
        <Link href="/albums">
          <a>Albums</a>
        </Link>
      </li>
      <li>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
      </li>
      <li>
        <Link href="/todos">
          <a>Todos</a>
        </Link>
      </li>
      <li>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </li>
    </ul>

    <style jsx>
      {`
        ul {
          list-style: none;
          display: flex;
          background: #333;
          color: #fff;
        }

        li {
          font-size: 18px;
          margin-right: 20px;
        }

        ul li a {
          color: #fff;
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default Navbar;
