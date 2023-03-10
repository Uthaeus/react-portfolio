
import profilePicture from '../assets/images/auth/login.jpg';

const AboutPage = () => {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" style={{
                background: `url(${profilePicture}) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} />

            <div className="right-column">
                Bio information....
            </div>
        </div>
    );
};


export default AboutPage;