import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './HomeFooter.scss'

export const HomeFooter = () => {
    library.add(fas)
    library.add(fab)

    return (
        <>
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name">DỊCH VỤ BẢO TRÌ</span>
                        </div>
                        <div className="media-icons">
                            <a href="#"><FontAwesomeIcon className="facebook" icon={['fab', 'facebook']} /></a>
                            <a href="#"><FontAwesomeIcon className="twitter" icon={['fab', 'twitter']} /></a>
                            <a href="#"><FontAwesomeIcon className="instagram" icon={['fab', 'instagram']} /></a>

                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Giới thiệu</li>
                            <li><a href="#"><h6>Sản phẩm</h6></a></li>
                            <li><a href="#"><h6>Công ty</h6></a></li>
                            <li><a href="#"><h6>Dịch vụ</h6></a></li>

                        </ul>
                        <ul className="box">
                            <li className="link_name">NHÓM DỊCH VỤ</li>
                            <li><a href="#"><h6>Phần cứng</h6></a></li>
                            <li><a href="#"><h6>Phần mềm</h6></a></li>
                        </ul>

                        <ul className="box">
                            <li className="link_name">Liên Hệ Với Chúng Tôi:</li>
                            <li><a href="#"><h6>Mrs.Trang: (+81) 0906.797.252</h6></a></li>
                            <li><a href="#"><h6>Mr.Khai: (+81) 0906.797.252</h6></a></li>
                            <li><a href="#"><h6>Email: maintaince@gmail.com</h6></a></li>


                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2023 <a href="#">Sitesoch.</a></span>
                        <span className="policy_terms">
                            <a href="#">Privacy policy</a>

                        </span>
                    </div>
                </div>
            </footer>

        </>
    )
}