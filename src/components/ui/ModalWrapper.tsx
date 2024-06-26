"use client";
import React, { ReactNode, MouseEvent } from "react";
import { useViewContext } from "@/context/combat/ViewContext";

type Props = {
  children: ReactNode;
  onClose?: (e: React.MouseEvent<HTMLDivElement>, boolean: boolean) => void;
};

export default function ModalWrapper({ children, onClose }: Props) {
  const { setView } = useViewContext();

  return (
    <>
      <div
        id="overlay"
        className="fixed z-10 h-full w-full bg-slate-950 bg-opacity-60 backdrop-blur-[2px] duration-500"
        onClick={(e) => onClose && onClose(e, false)}
      />
      <div className="fixed inset-0 z-20 m-auto h-fit w-fit transform rounded bg-white p-5 duration-500">
        {children}
      </div>
    </>
  );
}
