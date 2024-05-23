import { useEffect, useState } from 'react';
import image from '../assets/image.png';
import Modal from './Modal';

const Caption = () => {
    const [show, setShow] = useState(false);
    const [link, setLink] = useState('');
    const [captions, setCaptions] = useState('');
    const [captionUrl, setCaptionUrl] = useState('');
    const [open, setOpen] = useState(false)


    const handleLink = (e) => {
        setLink(e.target.value);
        console.log(link)
    };

    const handleCaptions = (e) => {
        setCaptions(e.target.value);
    };

    const handleOpenModal = () => {
        if (link && captions) setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (captions) {
            console.log('Captions:', captions);
            const blob = new Blob([captions], { type: 'text/vtt' });
            const url = URL.createObjectURL(blob);
            console.log('Blob URL:', url);
            setCaptionUrl(url);

            return () => {
                URL.revokeObjectURL(url);
            };
        }
    }, [captions]);

    return (
        <div className="container">
            <img src={image} alt="imagetag" />
            <div className='input'>
                <h1 className='title'>Welcome to Captionify!!!</h1>
                <p className='sub-title'>A place where to add captions to your videos</p>

                <button
                    className='button'
                    onClick={() => { setShow(!show); }}
                >
                    Get Started
                </button>
                {show && (
                    <input
                        className='video-link'
                        placeholder='Enter Hosted Video Link'
                        onChange={handleLink}
                        value={link}
                    />
                )}
                {show && (
                    <textarea
                        onChange={handleCaptions}
                        value={captions}
                        placeholder='Enter captions here in WebVTT format'
                    ></textarea>
                )}

                {link && captions && <button className='button'
                    onClick={handleOpenModal}
                >
                    Open Video</button>
                }
            </div>

            {open && <Modal onClose={handleCloseModal} url={link} captionUrl={captionUrl} />}
        </div>
    );
};

export default Caption;

