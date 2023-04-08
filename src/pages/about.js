
import profilePicture from '../assets/images/auth/att_park.jpg';

const AboutPage = () => {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" style={{
                background: `url(${profilePicture}) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} />

            <div className="right-column">
                Hi, my name is Roman. I was born and raised in Utah, USA, mostly in the Salt Lake City area. I love sports, food, travelling, my family, and especially watching my boys compete. After a large number of years in the construction industry I began to dip my toes in technology. Software development has reignited my interest in learning and kept me busy with new subjects to dive into.
            </div>
        </div>
    );
};


export default AboutPage;