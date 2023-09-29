// Components
import Dropdown from "./Dropdown";
import NavItems from "./NavItems";

function Navbar() {
    return (
        <div className="navigation-bar">
            <div className="mx-auto w-11/12 max-w-7xl pt-6 flex items-center justify-between">
                <div className="sduration-300 hover:cursor-pointer sm:inline-block">
                {/* <div className="bg-gradient-to-r from-purple-100 via-white to-purple-100 bg-no-repeat bg-right-bottom bg-size-0/5 transition bg-size-1300ms hover:bg-left bg-size-100/5"> */}
                    <span className="navbar-icon"><a href="/">Wensong Z.</a></span>
                </div>
                <NavItems />
                <Dropdown />
            </div>
        </div>
    );
}

export default Navbar;
