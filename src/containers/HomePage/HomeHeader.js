import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './HomeHeader.scss'

export const HomeHeader = () => {
    library.add(fas)

    return (
        <>
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <FontAwesomeIcon className="btn-bars" icon={['fas', 'fa-bars']} />
                        <div className='header-logo'></div>
                    </div>
                    <div className="center-content">
                        <div className='child-content'>
                            <div><b>GIỚI THIỆU</b></div>
                            <div className='subs-title'>Giới thiệu về công ty</div>
                        </div>
                        <div className='child-content'>
                            <div><b>SẢN PHẨM</b></div>
                            <div className='subs-title'>Danh sách sản phẩm</div>
                        </div>
                        <div className='child-content'>
                            <div><b>DỊCH VỤ</b></div>
                            <div className='subs-title'>Chọn gói dịch vụ bảo trì</div>
                        </div>
                        <div className='child-content'>
                            <div><b>CHUYÊN VIÊN</b></div>
                            <div className='subs-title'>Chọn chuyên viên xuất sắc</div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className='support' ><FontAwesomeIcon className="btn-bars" icon={['fas', 'fa-question-circle']} />Hỗ trợ</div>
                        <div className='flag' >VN</div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="home-header-banner">
                <div className="content-up">
                    <div className="title1">DỊCH VỤ BẢO TRÌ</div>
                    <div className="title2">cHĂM SÓC KHÁCH HÀNG TOÀN DIỆN</div>
                    <div className="search">
                        <FontAwesomeIcon className="icon-search" icon={['fas', 'fa-search']} />
                        <input className="btn-search" type="text" placeholder='Tìm kiếm sản phẩm' />
                    </div>
                </div>
                <div className='content-down'>

                </div>
            </div>

        </>
    )
}