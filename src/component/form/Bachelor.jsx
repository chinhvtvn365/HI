import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Form.css";
const Bachelor = () => {
  const [grade1, setGrade1] = useState("");
  const [grade2, setGrade2] = useState("");
  const [grade3, setGrade3] = useState("");
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const total =
      parseFloat(grade1 || 0) +
      parseFloat(grade2 || 0) +
      parseFloat(grade3 || 0);
    const avg = total / 3;
    setAverage(avg.toFixed(2));
  }, [grade1, grade2, grade3]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const regex = /^(\d{1,2})(\.\d{1,2})?$/;

    if (value === "" || regex.test(value)) {
      name === "grade1"
        ? setGrade1(value)
        : name === "grade2"
        ? setGrade2(value)
        : setGrade3(value);
    }
  };
  return (
    <>
     <h3>Thông tin tốt nghiệp đại học</h3>
      <div className="table-score">
        <span className="score-avg">Điểm trung bình 3 năm THPT</span>
        <table className='table table-bordered table1'>
        <tbody>
            <tr>
              <th scope="col">Môn 1</th>
              <th scope="col">Môn 2</th>
              <th scope="col">Môn 3</th>
              <th scope="col">Điểm trung bình</th>
            </tr>


            <tr>
              <td>
                <input
                  name="grade1"
                  type="number"
                  step="0.1"
                  pattern="[0-9]*"
                  max="10"
                  value={grade1}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  name="grade2"
                  type="number"
                  step="0.1"
                  pattern="[0-9]*"
                  max="10"
                  value={grade2}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  name="grade3"
                  type="number"
                  step="0.1"
                  pattern="[0-9]*"
                  max="10"
                  value={grade3}
                  onChange={handleInputChange}
                />
              </td>
              <td><span>{average}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-score">
      <span className="score-avg">Điểm xét tuyển</span>
        <table className='table table-bordered table2'>
        <caption>Ghi chú: Thí sinh chỉ chọn 1 tổ hợp để xét tuyển. Thí sinh nên chọn tổ hợp có điểm cao nhất.</caption>
        <tbody>
            <tr>
              <th scope="col">Tổ hợp</th>
              <th scope="col" colspan="3">A00</th>
              <th scope="col" colspan="3">A01</th>
            </tr>
            <tr>
              <th scope="col">Môn</th>
               <th scope="col">Toán</th>
                <th scope="col">Lý</th>
                <th scope="col">Hóa</th>
                <th scope="col">Toán</th>
                <th scope="col">Lý</th>
                <th scope="col">Hóa</th>
            </tr>


            <tr>
              <th scope="row">Lớp 10</th>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <th scope="row">Lớp 11</th>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <th scope="row">Lớp 12</th>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
              <td><input type="text"/></td>
            </tr>
            <tr>
              <th scope="row">Tổng điểm</th>
              <td colspan="3"></td>
              <td colspan="3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Bachelor;