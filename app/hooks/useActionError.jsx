import { useEffect, useState } from "react";

export default function useActionError(actionData) {
  const [error, setError] = useState({
    message: "",
    style: "",
  });

  useEffect(() => {
    if (actionData?.error) {
      setError({ message: actionData.error, style: "border-red-600" });

      const timer = setTimeout(() => {
        setError({ message: "", style: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [actionData]);

  return error;
}
