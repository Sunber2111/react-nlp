import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IComment from "./types/comment";

type ContentState = {
  comments: String[];
  commentsLabel: IComment[];
  isShow: boolean;
  currentComment: IComment;
  labelSelect: Number;
  indexSelect: number;
};

const initialState: ContentState = {
  comments: [],
  commentsLabel: [],
  isShow: false,
  currentComment: {
    content: "test",
    label: 0,
  },
  indexSelect: 0,
  labelSelect: 0,
};

const content = createSlice({
  name: "content",
  initialState,
  reducers: {
    changeShow(state) {
      state.isShow = true;
    },
    setComment(state, action: PayloadAction<String[]>) {
      state.comments = action.payload;
      state.currentComment = { content: action.payload[0], label: 0 };
    },
    pushCommentLabel(state, action: PayloadAction<IComment>) {
      state.commentsLabel.push(action.payload);
    },
    setLabelSelect(state, action: PayloadAction<Number>) {
      state.labelSelect = action.payload;
    },
    setCurrentCommentLabel(state, action:PayloadAction) {
      state.commentsLabel.push({
        content: state.currentComment.content,
        label: state.labelSelect
      });
      state.indexSelect++;
      state.currentComment = {
        content: state.comments[state.indexSelect],
        label: 0,
      };
    },
  },
});

const { reducer, actions } = content;

export const {
  changeShow,
  setComment,
  pushCommentLabel,
  setLabelSelect,
  setCurrentCommentLabel
} = actions;

export default reducer;
