import React from "react";
import ImportExcel from "./components/importExcel";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/store";
import { setLabelSelect, setCurrentCommentLabel } from "./contentSlice";
import SelectionMode from "./components/selectMode";
import { CSVLink } from "react-csv";

const headers = [
  { label: "Label", key: "label" },
  { label: "Comment", key: "content" },
];

const Content = () => {
  const isShow = useSelector((s: RootState) => s.content.isShow);
  const data = useSelector((s: RootState) => s.content.commentsLabel);
  const dispatch = useDispatch();

  const handlePress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    try {
      if (e.key === "Enter") {
        dispatch(setCurrentCommentLabel());
      }

      let label: number = +e.key;

      if (label >= 0 && label <= 5) {
        dispatch(setLabelSelect(label));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="content" onKeyDown={(e) => handlePress(e)}>
      {!isShow ? <ImportExcel /> : <SelectionMode />}
      {isShow && (
        <CSVLink data={data} headers={headers}>
          Chuyển Thành File Excel
        </CSVLink>
      )}
    </div>
  );
};

export default Content;
