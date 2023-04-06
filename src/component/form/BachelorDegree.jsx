import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import "./Form.css";
const BachelorDegree = () => {
    const [year, setYear] = useState("");
    const [majors, setMajors] = useState("");
    const [school, setSchool] = useState("");
    const [rating, setRating] = useState("");
    const [diploma, setDiploma] = useState("");
    const [math, setMath] = useState("");
    const [computerScience, setComputerScience] = useState("");
    const [subjectName1, setSubjectName1] = useState("");
    const [subjectName2, setSubjectName2] = useState("");
    const [totalScore, setTotalScore] = useState(0);
    useEffect(() => {
        setTotalScore(math + computerScience);
      }, [math, computerScience]);
  return (
   <>
   <h3>Thông tin tốt nghiệp đại học</h3>
    <div className="group-ele row">
      <div className="form-group col-sm-6 input-ele">
      <label htmlFor="year-input" class="col-form-label" style={{width: "145px"}}>Năm tốt nghiệp:</label>
      <div className="input-wrap">
      <input
        type="text"
        id="year-input"
        name="year"

        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      </div>
    </div>
      <div className="form-group col-sm-6 input-ele">
      <label htmlFor="input-majors" class="col-form-label">Ngành:</label>
      <div className="input-wrap">
      <input
        id="input-majors"
        type="text"
        value={majors}
        onChange={(e) => setMajors(e.target.value)}
      />
      </div>
    </div>
    </div>
    <div class="group-ele form-group input-ele">
      <label htmlFor="input-school" class="col-form-label">Trường:</label>
      <div className="input-wrap">
      <input
        id="input-school"
        type="text"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        style={{width: "96.5%"}}
      />
      </div>
    </div>

    <div className="group-ele row">
    <div className="form-group col-sm-6 input-ele">
      <label htmlFor="input-diploma" class="col-form-label" >Số văn bằng:</label>
      <div class="input-wrap">
      <input
        id="input-diploma"
        type="text"
        value={diploma}
        onChange={(e) => setDiploma(e.target.value)}
      />
      </div>
    </div>
    <div className="form-group col-sm-6 input-ele">
   
    <label htmlFor="" class="col-form-label"  style={{width: "145px"}}>Xếp loại tốt nghiệp:</label>
    <div class="input-wrap">
    <select value={rating} onChange={(e) => setRating(e.target.value)}>
      <option value="">Chọn loại tốt nghiệp</option>
      <option value="Xuất sắc">Xuất sắc</option>
      <option value="Giỏi">Giỏi</option>
      <option value="Khá">Khá</option>
      <option value="Trung bình khá">Trung bình khá</option>
      <option value="Trung bình">Trung bình</option>
      <option value="Yếu">Yếu</option>
      <option value="Kém">Kém</option>
    </select>
    </div>
  </div>
  </div>

    <div className="table-score">
    <span className="score-avg">
        Điểm xét tuyển (theo thang 10):
        </span>
        <table className='table table-bordered' cellSpacing="0" cellPadding="0" border="1">

      <tbody>
      <tr>
          <th scope="col"></th>
          <th scope="col">Kiến thức toán</th>
          <th scope="col">Kiến thức tin học</th>
          <th scope="col">Tổng điểm</th>
        </tr>
        <tr>
        <th scope="row">Tên môn học</th>
          <td><input placeholder="" type="text" value={subjectName1} onChange={(e) => setSubjectName1(e.target.value)} /></td>
          <td><input type="text" value={subjectName2} onChange={(e) => setSubjectName2(e.target.value)} /></td>
          <td></td>
        </tr>
        <tr>
        <th scope="row">Điểm <br/>
        </th>
          <td><input type="number" pattern="[0-9]*" step="0.1" min="0" max="10" value={math} onChange={(e) => setMath(parseInt(e.target.value))} /></td>
          <td><input type="number" pattern="[0-9]*" step="0.1" min="0" max="10" value={computerScience} onChange={(e) => setComputerScience(parseInt(e.target.value))} /></td>
          <td>{totalScore}</td>
        </tr>
      </tbody>
    </table>
    </div>
   </>
  )
}

export default BachelorDegree