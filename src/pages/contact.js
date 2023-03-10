import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contactPagePicture from '../assets/images/auth/login.jpg';

const ContactPage = () => {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" style={{
                background: `url(${contactPagePicture}) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} />

            <div className="right-column">
                <div className='contact-bullet-points'>
                    <div className='bullet-pont-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='phone' />
                        </div>
                        <div className='text'>
                            555-555-5555
                        </div>
                    </div>

                    <div className='bullet-pont-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='envelope' />
                        </div>
                        <div className='text'>
                            homer@example.com
                        </div>
                    </div>

                    <div className='bullet-pont-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='map-marked-alt' />
                        </div>
                        <div className='text'>
                            Lehi, UT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContactPage;