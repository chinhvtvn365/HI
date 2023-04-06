import React, { useEffect, useState } from "react";
import Bachelor from "./Bachelor";
import BachelorDegree from "./BachelorDegree";
import moment from "moment";
import "./Form.css";
const Admission = () => {
  const [fullName, setFullName] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [city, setCity] = useState([]);
  const [valueCCCD, setValueCCCD] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isOverdue, setIsOverdue] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);

  const daysBetween = (dateExprid, dateNow) => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const timestamp1 = dateExprid.getTime();
    const timestamp2 = dateNow.getTime();
    const diff = timestamp2 - timestamp1; // difference in milliseconds
    const days = Math.round(diff / oneDay); // round to the nearest day
    return days;
  }
  const dateExprid = new Date("2023-04-10");
  let dateNow = new Date();
  useEffect(() => {
    const days = daysBetween(dateExprid, dateNow);
    if(days > 0){
      setIsOverdue(true)
    }
    else {
      setIsOverdue(false)
    }
  }, [dateNow])

  const handleCCCDChange = (event) => {
    const newValue = event.target.value;
    if (/^\d{0,12}$/.test(newValue)) {
      setValueCCCD(newValue);
    }
  };

  const handlePhoneChange = (event) => {
    const input = event.target.value;
    // Chỉ cho phép nhập số
    const regex = /^[0-9\b]+$/;
    if (input === "" || regex.test(input)) {
      setPhone(input);
    }
  };

  const validateEmail = (email) => {
    // regex kiểm tra email đúng định dạng
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const handleRadio1 = () => {
    setShowForm1(true);
    setShowForm2(false);
  };
  const handleRadio2 = () => {
    setShowForm1(false);
    setShowForm2(true);
  };
  return (
    <section className="admission">
     {isOverdue ? (
      <div className="admission_noti">
        <h2>Rất tiếc, đã quá thời hạn nộp hồ sơ</h2>
        <span>Khi có thông báo hãy quay lại sau</span>
      </div>
     ) : ( <div className="admission_content">
        <div>
          <h2>ĐĂNG KÝ XÉT TUYỂN</h2>
          <div className="radio-picker">
            <label>
              <input
                type="radio"
                name="form"
                value="form1"
                checked={showForm1}
                onChange={handleRadio1}
              />
              Cử Nhân
            </label>
            <label>
              <input
                type="radio"
                name="form"
                value="form2"
                checked={showForm2}
                onChange={handleRadio2}
              />
               Cử Nhân Văn Bằng 2
            </label>
          </div>
          {(showForm1 || showForm2) && (
            <div className="admission_content-info">
              <h3>Thông tin cá nhân</h3>
              <form>
                <div className="group-ele row">
                  <div className="form-group col-sm-9 input-ele">
                    <label htmlFor="fullName" class="col-form-label ">
                      Họ và tên:
                    </label>
                    <div className="input-wrap" style={{display: "flex", gap: "10px"}}>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Họ và tên đệm"
                        style={{width: "50%"}}
                      />
                         <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tên"
                        style={{width: "50%"}}
                      />
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <select
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Chọn giới tính</option>
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>

                <div className="group-ele row">
                  <div className="form-group col-sm-6 input-ele">
                    <label htmlFor="place" className="col-form-label">
                      Nơi sinh:
                    </label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        id="place"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 input-ele">
                    <label
                      htmlFor="dateOfBirth"
                      class="col-form-label col-md-2"
                    >
                      Ngày sinh:
                    </label>
                    <div className="input-wrap">
                      <input
                        type="date"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="group-ele row">
                <div className="form-group col-sm-6 input-ele">
                    <label htmlFor="ethnicity" class="col-form-label">
                      Dân tộc:
                    </label>
                    <div class="input-wrap">
                      <input
                        type="text"
                        id="ethnicity"
                        value={ethnicity}
                        onChange={(e) => setEthnicity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 input-ele">
                    <label htmlFor="cccd-input" class="col-form-label">
                      Số CCCD:
                    </label>
                    <div class="input-wrap">
                      <input
                        type="text"
                        id="cccd-input"
                        value={valueCCCD}
                        onChange={handleCCCDChange}
                      />
                      {valueCCCD.length > 12 && (
                        <p>Số chữ số đã vượt quá giới hạn.</p>
                      )}
                    </div>
                  </div>
                </div>
                <div class="group-ele form-group input-ele" style={{padding: "0 10.5px"}}>
                  <label htmlFor="address" class="col-form-label ">
                    Địa chỉ:
                  </label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
   
                <div className="group-ele row">
                <div className="form-group col-sm-6 input-ele">
                  <label htmlFor="email" class="col-form-label">
                    Email:
                  </label>
                  <div className="input-wrap">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {email && !validateEmail(email) && (
                      <p style={{ color: "red", float: "left" }}>
                        Email không hợp lệ
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-sm-6 input-ele">
                  <label htmlFor="phone" className="col-form-label">
                    Số điện thoại:
                  </label>
                  <div class="input-wrap">
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength="14"
                    />
                  </div>
                </div>
    </div>
              </form>
            </div>
          )}
          {(showForm1 || showForm2) && (
            <div className="admission_content-info">
             
              <div>
                {showForm1 && <Bachelor />}

                {showForm2 && <BachelorDegree />}
              </div>
              <div>
                <input type="submit" value="Đăng ký" />
              </div>
            </div>
          )}
        </div>
      </div>)}
    </section>
  );
};

export default Admission;
