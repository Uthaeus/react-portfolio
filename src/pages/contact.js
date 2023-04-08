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
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='phone' />
                        </div>
                        <div className='text'>
                            801-560-4312
                        </div>
                    </div>

                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon='envelope' />
                        </div>
                        <div className='text'>
                            romanlavery@gmail.com 
                        </div>
                    </div>

                    <div className='bullet-point-group'>
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