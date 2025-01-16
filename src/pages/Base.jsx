import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MenuProvider from "../context/MenuContext";
import MenuMobile from "../components/MenuMobile/MenuMobile";

const Base = (props) => {
        return (
            <MenuProvider>
                    <MenuMobile/>
                    <Header/>
                    <div className="container">
                            {props.children}
                    </div>
                    <Footer/>
            </MenuProvider>
        )
}

export default Base;