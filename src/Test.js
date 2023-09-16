import React, { useEffect, useState } from 'react'
import Modal from './components/Modal'

export const Test = () => {

    const [modalVisible, setModalVisible] = useState(true)

    const closeModal = () => {
        setModalVisible(false)
    }
    
    return(
        <div>
            {modalVisible && (
                <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}></Modal>
            )}
        </div>
    )
}