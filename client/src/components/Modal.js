import React from 'react'

const Modal = ({ onClose, url, captionUrl }) => {
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <span className='close' onClick={onClose}>&times;</span>
                <video controls width='560' height='315'>
                    <source src={url} type='video/mp4' />
                    {captionUrl &&
                        <track
                            label="English"
                            kind="subtitles"
                            srcLang="en"
                            src={captionUrl}
                            default
                        />
                    }
                </video>
            </div>
        </div>
    )
}

export default Modal
