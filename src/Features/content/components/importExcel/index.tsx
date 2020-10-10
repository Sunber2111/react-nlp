import React from "react";
import "./styles.scss";
import readXlsxFile from "read-excel-file";
import { changeShow } from "../../contentSlice";
import { useDispatch } from "react-redux";
import { setComment } from "../../contentSlice";

const ImportExcel = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      dispatch(changeShow());
      readXlsxFile(e.target.files[0]).then((rows: Array<Array<String>>) => {
        let array_comments: String[] = [];

        rows.forEach((val) => {
          val.forEach((cmt) => {
            array_comments.push(cmt);
          });
        });

        dispatch(setComment(array_comments));
      });
    }
  };
  return (
    <div className="imp-exc">
      <input type="file" id="file" onChange={(e) => handleChange(e)} />
      <label htmlFor="file">Chọn File Excel</label>
    </div>
  );
};

export default ImportExcel;
