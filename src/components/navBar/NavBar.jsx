import PropTypes from 'prop-types';

import './Navbar.css';

const NavBar = ({ changePage }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Task</h1>
        </div>
        <div>
          <button
            onClick={changePage('usersPage')}
            className="btn"
            style={{ marginRight: 10 }}>
            users
          </button>
          <button onClick={changePage('postsPage')} className="btn">
            posts
          </button>
        </div>
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default NavBar;
