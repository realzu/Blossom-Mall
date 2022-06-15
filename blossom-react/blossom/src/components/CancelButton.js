import React from "react";
import { css } from "@emotion/css";

export default function CancelButton() {

  return (
    
    <div>
      <button
        className={css`
          margin-top: 30px;
          /* margin-left: 450px; */
          margin-right: 50px;
          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 12px;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          color: #000000;
          padding: 6px 21px;
          :hover{
            background: #abcdef;
            color: #ffffff;
          }
        `}
        onClick={(e) => window.location.href='/mypage/qna'}
      >
        취소
      </button>
    </div>
  );
}