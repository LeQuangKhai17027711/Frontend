import React from 'react';
import './Background.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export const Background = () => {
    library.add(fas)

    return (
        <div className="home-header-banner">
            <div className="content-up">
                <div className="title1">DỊCH VỤ BẢO TRÌ</div>
                <div className="title2">CHĂM SÓC KHÁCH HÀNG TOÀN DIỆN</div>
                <div className="search">
                    <FontAwesomeIcon className="icon-search" icon={['fas', 'fa-search']} />
                    <input className="btn-search" type="text" placeholder='Tìm kiếm sản phẩm' />
                </div>
            </div>
            <div className='content-down'>
            </div>
        </div>
    )
}