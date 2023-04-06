import React from 'react'
import "./Header.css"

const Header = () => {
  return (
  
                <div className="header">
                    <div className="wrapper clearfix">
                        <div className="container hidden-xs" style={{position: 'relative'}}>
                            <div className="logo clearfix" style={{display: 'flex'}}>
                                <a href="#" title="Responsive Slide Menus">
                                    <img src="https://new.e-learning.vn/template/frontend/images/logo.jpg" alt="" style={{height: "70px"}} />
                                </a>
                            </div>
                            <div className="searchdestop">
                                <span className='khung-dang-nhap' onclick='Mo_khung_dang_nhap()'>
                                <i class="fas fa-user"></i>
                                    <span>Đăng nhập</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid" style={{backgroundColor: "#01458e"}}>
                        <div className="container">
                            <nav className="wsmenu pm_buttoncolor blue-grdt slideLeft clearfix menuclose">
                                <ul className="mobile-sub wsmenu-list">
                                    <li>
                                        <a data-id='trang-chu' className='thuc-don active' href='/'>
                                        <i className="fas fa-home"></i>
                                            <span className='hometext'></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a data-id='gioi-thieu' className='thuc-don scroll' href='/#gioi-thieu'>Giới thiệu</a>
                                    </li>
                                    <li>
                                        <a data-id='chuong-trinh-dao-tao' className='thuc-don scroll' href='/#chuong-trinh-dao-tao'>Chương trình đào tạo</a>
                                    </li>
                                    <li>
                                        <a data-id='tuyen-sinh' className='thuc-don scroll' href='/#tuyen-sinh'>Thông tin tuyển sinh</a>
                                    </li>
                                    <li>
                                        <a data-id='tin-tuc' className='thuc-don scroll' href='/#tin-tuc'>Thông báo - Tin tức</a>
                                    </li>
                                    <li>
                                        <a data-id='cau-hoi-thuong-gap' className='thuc-don' href='/cau-hoi-thuong-gap'>Câu hỏi thường gặp</a>
                                    </li>
                                    <li>
                                        <a data-id='lien-he' className='thuc-don' href='/lien-he'>Liên hệ</a>
                                    </li>
                                    <li>
                                        <a data-id='huong-dan-su-dung' className='thuc-don' href='/Huong_dan_Su_dung.pdf'>Hướng dẫn sử dụng</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
   

  )
}

export default Header