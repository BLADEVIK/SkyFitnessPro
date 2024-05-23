import React from "react";

const UserDropDown = () => {
  return (
    <div onClick={(e)=>e.stopPropagation()} className="p-[30px] rounded-[30px w-[266px] grid gap-[34px] text-center absolute top-16 right-0 shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]">
      <div className="grid gap-2.5">
        <p className="text-sm">Сергей</p>
        <p className="text-sm text-txt-gr ">sergey.petrov96@mail.ru</p>
      </div>
      <div className="grid gap-2.5">
        <button
          className="text-sm w-full rounded-full bg-bright-green py-4 px-[26px]"
          type="button"
        >
          Мой профиль
        </button>
        <button
          className="text-sm w-full rounded-full border-black border py-4 px-[26px]"
          type="button"
        >
          Выйти
        </button>
      </div>
    </div>
  );
};
// пользовтельская менюшка в хедере,2 кнопки , вход /выход мыло и прочее.
export default UserDropDown;