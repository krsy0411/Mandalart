import React, { useEffect } from 'react'
import Guide from './Guide';
import "../css/modal.style.css";
import PropTypes from 'prop-types'

function Modal({onClose, maskClosable, closable, visible}) {
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e);
        }
    }
    
    const VISITED_BEFORE_DATE = localStorage.getItem('VisitCookie');
    const VISITED_NOW_DATE = Math.floor(new Date().getDate());

    localStorage.removeItem('VisitCookie')

    useEffect(() => {
        if (VISITED_BEFORE_DATE !== null) {
            if (VISITED_BEFORE_DATE === VISITED_NOW_DATE) {
                localStorage.removeItem('VisitCookie')
                onClose(true)
            }
            if (VISITED_BEFORE_DATE !== VISITED_NOW_DATE) {
                onClose(false)
            }
        }
    }, [VISITED_BEFORE_DATE])

    const Dayclose = (e) => {
        if (onClose) {
            onClose(e)
            const expiry = new Date()
            const expiryDate = expiry.getDate() + 1
            localStorage.setItem('VisitCookie', expiryDate)
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }    

    return(
        <>
        <div className="modal-overlay"/>
        <div 
            className="modal-wrapper"
            onClick={maskClosable ? onMaskClick : null}
            tabIndex="-1"
            visible={visible}
        >
             <div tabIndex="0" className="modal-inner">
                <div className="modal-inner2">
                    <Guide/>
                </div>
                <button className="start-button" onClick={close}>
                    바로 시작!
                </button>

                {/* {closable && (
                        <div className="close-style">
                            <span className="modal-close" onClick={Dayclose}>
                                오늘 하루 닫기
                            </span>
                            <span className="modal-close" onClick={close}>
                                닫기
                            </span>
                        </div>
                    )} */}
             </div>
        </div>
        </>
    );
}

Modal.propTypes = {
    visible: PropTypes.bool,
}

export default React.memo(Modal);