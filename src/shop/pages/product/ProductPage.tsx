import { useStore } from "@/auth/store/auth.store";

export const ProductPage = () => {
  const { count, inc } = useStore();
  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={inc}>+1</button>
    </>
  );
};
