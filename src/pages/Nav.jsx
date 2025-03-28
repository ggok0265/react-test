import logoImg from "../assets/react.svg";
import styles from "./Nav.module.css";

const getLinkStyle = ({ isActive }) => {
    // 현재 경로가 to에 써있는 경로와 같으면 true
    return {
      textDecoration: isActive ? "underline" : undefined,
    };
  };

function Nav() {
    return (
      <div className={styles.nav}>
        <Container className={styles.container}>
          <Link to="/">
            <img src={logoImg} alt="Codethat Logo" />
          </Link>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/courses" style={getLinkStyle}>
                카탈로그
              </NavLink>
            </li>
            <li>
              <NavLink to="/questions" style={getLinkStyle}>
                커뮤니티
              </NavLink>
            </li>
            <li>
              <UserMenu />
            </li>
          </ul>
        </Container>
      </div>
    );
  }
  
  export default Nav;