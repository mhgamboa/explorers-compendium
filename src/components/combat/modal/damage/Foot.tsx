import React from "react";

export default function Foot({ onClose }: { onClose: Function }) {
  return (
    <div id="foot" className="flex justify-end gap-x-4 border-t-2 pt-3">
      <button className="rounded border p-2" onClick={(e) => onClose(e, false)}>
        Cancel
      </button>
      <button
        className="rounded border bg-green-200 p-2"
        onClick={(e) => onClose(e, true)}
      >
        Save
      </button>
    </div>
  );
}
