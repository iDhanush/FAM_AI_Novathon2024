import { baseUrl } from "../constants";
export const createAcc = async (wallet) => {
  try {
    const response = await fetch(`${baseUrl}/user/create_account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-auth-token",
        "ngrok-skip-browser-warning": "69420",
        Address: wallet,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || "Acc failed to create");
    }

    const result = await response.json();
    console.log("Acc created:", result);
    return result;
  } catch (error) {
    console.error("Acc error:", error);
  }
};

export const createIndiProfile = async (wallet, formData) => {
  try {
    const response = await fetch(`${baseUrl}/user/create_profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-auth-token",
        "ngrok-skip-browser-warning": "69420",
        address: wallet,
      },
      body: JSON.stringify({
        name: formData.name,
        dob: formData.dob,
        gender: formData.gender,
        blood: formData.bloodGroup,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg || "Acc failed to create");
    }

    const result = await response.json();
    console.log("Acc created:", result);
    return result;
  } catch (error) {
    console.error("Acc error:", error);
  }
};
