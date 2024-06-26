import { EncounterContextProvider } from "@/context/combat/EncounterContext";
import { IndexContextProvider } from "@/context/combat/IndexContext";
import { MainFocusedContextProvider } from "@/context/combat/MainFocusedContext";
import { RollContextProvider } from "@/context/combat/RollContext";
import { ViewContext, ViewContextProvider } from "@/context/combat/ViewContext";
import { getCombatEncounter } from "@/server/queries";
// import { Encounter2 } from "@/types/combat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialEncounter = await getCombatEncounter();

  return (
    <html lang="en">
      <ViewContextProvider>
        <RollContextProvider>
          <MainFocusedContextProvider>
            {/* Combine Encounter and Index Contexts? */}
            <EncounterContextProvider initialEncounter={initialEncounter}>
              <IndexContextProvider>
                <body>{children}</body>
              </IndexContextProvider>
            </EncounterContextProvider>
          </MainFocusedContextProvider>
        </RollContextProvider>
      </ViewContextProvider>
    </html>
  );
}
