import Header from '../Header/header.component';
import './landingPage.component.css';

const imgstyle = {
    height: '100vh',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
};

function LandingPage() {
    return (
        <div className="landing-page">
            <section style={imgstyle} className="backImage">
                <div className="header">
                    <Header />
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
