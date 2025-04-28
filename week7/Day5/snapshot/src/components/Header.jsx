import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="header">
      <h1>SnapShot</h1>
      <SearchForm />
      <nav>
        <ul>
          <li><Link to="/category/mountain">Mountain</Link></li>
          <li><Link to="/category/beaches">Beaches</Link></li>
          <li><Link to="/category/birds">Birds</Link></li>
          <li><Link to="/category/food">Food</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
