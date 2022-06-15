import React from "react";
import { css } from "@emotion/css";

export default function OkButton({OkAction}) {

  return (
    <div>
      <button 
        className={css`
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
        type='submit'
      >
        작성하기
      </button>
    </div>
  );
}