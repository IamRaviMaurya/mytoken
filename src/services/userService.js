import { API_URL } from '../config/config';

export const signupUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Signup failed');
    }

    let data;
    if (response.headers.get("content-length") !== "0") {
      data = await response.json();
    } else {
      data = {}; // or any other value that makes sense for an empty response
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};