import React from 'react'
import { HomeFooter } from '../containers/HomePage/HomeFooter'
import './IntroPage.scss'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


export const IntroPage = () => {
    library.add(fas)
    return (
        <>
            <div className='container-page'>
                <h3 style={{
                    textAlign: 'center',
                    margin: '30px'
                }}>GIỚI THIỆU TRANG WEB</h3>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://hoanghaservice.com/mediacenter/media/2703/images/web.jpg"
                            alt="First slide"
                            height={'600px'}

                        />
                        <Carousel.Caption>
                            <h3>Bảo trì trang web</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://hoanghaservice.com/mediacenter/media/2703/images/website.jpg"
                            alt="Second slide"
                            height={'600px'}
                        />

                        <Carousel.Caption>
                            <h3>Xây dựng Website</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://bittechnologies.co.in/assets/img/webdevelop.jpg"
                            alt="Third slide"
                            height={'600px'}
                        />

                        <Carousel.Caption>
                            <h3>Đáp ứng mọi ngôn ngữ</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='text-1'><h4>Web Maintain được thành lập từ năm 2023 và đã có nhiều kinh nghiệm từ những năm trước đó.</h4> </div>
                <div className='text-2'><h5>Doanh nghiệp, cá nhân của bạn cần sửa chửa phần cứng, phần mềm, hệ thống Server, máy chủ, thiết lập quản lý đám mây cloud, kế hoạch khắc phục thảm họa, Backup dữ liệu, trang bị máy tính nhân viên.</h5></div>

                <div className='text-3'><h5>Chúng tôi là nhà cung cấp dịch vụ Bảo trì IT CHẤT LƯỢNG cho nhu cầu của bạn và đã được nhiều khách hàng tin dùng để chứng minh.</h5> </div>
                <div className='text-4'><h2>  TẠI SAO CHỌN WEB MAINTAIN ???</h2> </div>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant="top" height={'230px'} src="https://cpc.vn/portals/0/articleupload/289f24d7-4f4e-432e-9f33-433e560272eb.png" />
                            <Card.Body>
                                <Card.Title className='title-card'>Chất Lượng</Card.Title>
                                <Card.Text className='context-card'>
                                    <h5> Mối quan tâm hàng đầu mà IT SYSTEMS luôn hướng đến, vì vậy IT SYSTEMS chỉ cung cấp những sản phẩm
                                        và dịch vụ đáp ứng đúng tiêu chuẩn mà khách hàng đề ra.</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <Card.Img variant="top" height={'230px'} src="https://secure.caes.uga.edu/extension/publications/files/html/C1042/images/mceclip03.jpg" />
                            <Card.Body>
                                <Card.Title className='title-card'>Thời Gian</Card.Title>
                                <Card.Text className='context-card'>
                                    <h5> IT Systems Có một quy trình làm việc rõ ràng, hiểu được giá trị của thời gian quý báu của DN,
                                        vì vậy IT SYSTEMS sẽ áp dụng quy trình hiệu quả, đảm bảo đúng tiến độ đã cam kết.</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://www.ifco.com/media/generating-cost-savings-1180x786.jpg" height={'230px'} />
                            <Card.Body>
                                <Card.Title className='title-card'>Chi Phí</Card.Title>
                                <Card.Text className='context-card'>
                                    <h5> Chí phí cạnh tranh cao nhưng cam kết đảm bảo chất lượng dịch vụ tốt nhất cũng
                                        như sản phẩm mà IT SYSTEMS cung cấp. Bạn hãy yên tâm với chất lượng IT Systems cung cấp.</h5>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr style={{
                    color: 'red',
                    backgroundColor: 'red',
                    height: 5
                }} />
                <div className='statistical'>
                    <Row xs={2} md={4} className="g-4">
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='title-number'><h1>5 <FontAwesomeIcon icon={['fas', 'fa-plus']} /></h1></Card.Title>
                                    <Card.Text>
                                        <h4>KINH NGHIỆM</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='title-number'><h1>9 <FontAwesomeIcon icon={['fas', 'fa-plus']} /></h1></Card.Title>
                                    <Card.Text>
                                        <h4>DỊCH VỤ</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='title-number'><h1>53 <FontAwesomeIcon icon={['fas', 'fa-plus']} /></h1></Card.Title>
                                    <Card.Text>
                                        <h4>HOÀN THÀNH</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='title-number'><h1>32 <FontAwesomeIcon icon={['fas', 'fa-plus']} /></h1></Card.Title>
                                    <Card.Text>
                                        <h4>KHÁCH HÀNG</h4>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <hr style={{
                    color: 'red',
                    backgroundColor: 'red',
                    height: 5
                }} />

                <h3 style={{ margin: '30px' }}>Chất lượng dịch vụ là trên hết! Chúng tôi đảm bảo rằng mọi công việc được cẩn thận,
                    tập trung 100% vào nhu cầu và sự hài lòng của khách hàng. Cung cấp giải pháp, dịch vụ <span style={{ color: 'red' }}>công nghệ
                        thông tin</span> hoàn hảo cho tất cả các yêu cầu của bạn và tạo ra sự tin tưởng từ doanh nghiệp, cá nhân của bạn.</h3>
                <h3 style={{ margin: '30px' }}>Xem các <Link to="/service">Dịch vụ công ty</Link></h3>
            </div>
            <HomeFooter />
        </>
    )
}
