import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import "./App.css";
import NfFooter from "./component/NfFooter";
import NfNavbar from "./component/NfNavbar";
import NfMain from "./component/NfMain";
import NfEditProfile from "./component/NfEditProfile";

import { hello } from "./component/constants";

console.log(hello);

// grazie al bottone giallo in alto nella pagina si può passare da home a edit profile

function App() {
    return (
        <>
            <div className="index">
                <NfNavbar />
                <NfMain />
                <NfEditProfile />
                <NfFooter></NfFooter>
            </div>
        </>
    );
}

export default App;
