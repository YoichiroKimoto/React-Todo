import React from "react";

export const InputTodo = (prpos) => {
  const { todoText, onChange, onClick } = prpos;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
