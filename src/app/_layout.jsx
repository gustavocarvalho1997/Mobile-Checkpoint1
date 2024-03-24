import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#add8e6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{title: "Cliente"}}/>
      <Stack.Screen name="dadosFinanciamento" options={{title: "Financiamento"}}/>
    </Stack>
  );
}