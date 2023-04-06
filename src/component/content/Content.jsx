import React from "react";
import Form from "../form/Form";
import "../header/Header.css";
const Content = () => {
  return (
    <div className="wrapper content">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="faq">
              <div className="label">Thông tin liên quan</div>
              <div className="text">
                <ul>
                  <li>
                    <a href="/thong-tin/cu-nhan-2022">Thông báo tuyển sinh</a>
                  </li>
                  <li>
                    <a href="/thong-tin/cu-nhan-2022">Hướng dẫn đăng ký</a>
                  </li>
                  <li>
                    <a href="/thong-tin/cu-nhan-2022">Đăng ký dự tuyển</a>
                  </li>
                  <li>
                    <a href="/thong-tin/cu-nhan-2022">Chương trình đào tạo</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="Lket">
                <p>
                    <img
                      src=" http://e-learning.vn/MBook/TSTEMPLATE/LEFT3/Hinh/DT tu van.png "
                      width=" 247 "
                      height=" 94 "
                      alt=""
                    />
                </p>
              </div>
            </div>
            <div className="col-lg-9">
            <Form />
          </div>
            </div>
          </div>

        </div>

 
   
  );
};
export default Content;
