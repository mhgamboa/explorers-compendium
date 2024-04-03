import React from "react";

export default function Foot() {
  return (
    <div id="foot" className="flex justify-end gap-x-4 border-t-2 pt-3">
      <button className="rounded border p-1">Cancel &amp; close</button>
      <button className="rounded border p-1">Save &amp; close</button>
    </div>
  );
}
