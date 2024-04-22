"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { useCombatStore, SavingThrow } from "@/store/combatStore";
import { Condition } from "@/types/combatTypes";
import ModalWrapper from "@/components/ui/ModalWrapper";
import Heading from "./Heading";
import Body from "./Body";
import Foot from "./Foot";

export type ChildProps = {
  type?: SavingThrow;
  rolls?: number[];
  setType?: Dispatch<SetStateAction<SavingThrow>>;
  setRolls?: Dispatch<SetStateAction<number[]>>;
  DC?: number;
  setDC?: Dispatch<SetStateAction<number>>;
  rollers?: number[];
  setRollers?: Dispatch<SetStateAction<number[]>>;
  curCondition?: Condition;
  setCondition?: Dispatch<SetStateAction<Condition>>;
};

export default function SavingThrowModal() {
  const view = useCombatStore((state) => state.view);

  const [type, setType] = useState<SavingThrow>("");
  const [rolls, setRolls] = useState<number[]>([]);
  const [rollers, setRollers] = useState<number[]>([]);
  const [DC, setDC] = useState<number>(0);
  const [curCondition, setCondition] = useState<Condition>("");

  if (view !== "savingThrow") return;

  return (
    <ModalWrapper>
      <Heading
        type={type}
        setType={setType}
        setRolls={setRolls}
        DC={DC}
        setDC={setDC}
      />
      <Body
        type={type}
        rolls={rolls}
        setRolls={setRolls}
        rollers={rollers}
        setRollers={setRollers}
        DC={DC}
        curCondition={curCondition}
        setCondition={setCondition}
      />
      <Foot />
    </ModalWrapper>
  );
}

// "use client";
// import { useReducer, Dispatch } from "react";
// import { useCombatStore, SavingThrow } from "@/store/combatStore";
// import ModalWrapper from "@/components/ui/ModalWrapper";
// import Heading from "./Heading";
// import Body from "./Body";
// import Foot from "./Foot";

// export type State = {
//   type: SavingThrow;
//   rolls: number[];
//   rollers: number[];
//   DC: number;
// };

// export type ActionType =
//   | { type: "SET_TYPE"; payload: SavingThrow }
//   | { type: "SET_ROLLS"; payload: number[] }
//   | { type: "SET_ROLLERS"; payload: number[] }
//   | { type: "SET_DC"; payload: number };

// const initialState: State = {
//   type: "",
//   rolls: [],
//   rollers: [],
//   DC: 0,
// };

// const reducer = (state: State, action: ActionType): State => {
//   switch (action.type) {
//     case "SET_TYPE":
//       return { ...state, type: action.payload };
//     case "SET_ROLLS":
//       return { ...state, rolls: action.payload };
//     case "SET_ROLLERS":
//       return { ...state, rollers: action.payload };
//     case "SET_DC":
//       return { ...state, DC: action.payload };
//     default:
//       return state;
//   }
// };

// export type ChildProps = { state: State; dispatch: React.Dispatch<ActionType> };

// export default function SavingThrowModal() {
//   console.log("modal");
//   const view = useCombatStore((state) => state.view);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   if (view !== "savingThrow") return null;

//   return (
//     <ModalWrapper>
//       <Heading state={state} dispatch={dispatch} />
//       <Body state={state} dispatch={dispatch} />
//       <Foot state={state} dispatch={dispatch} />
//     </ModalWrapper>
//   );
// }
