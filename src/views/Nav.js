import '../views/Nav.scss';

const Nav = () => {
    return (
<div className="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search.."></input>
</div>
    )
};
 export default Nav;
