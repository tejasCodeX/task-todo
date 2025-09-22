async function createTaskAPI(values, handleResponse, handleError, setLoading) {
  setLoading(true);
  try {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    const endPoint = "/task";
    const url = `${baseUrl}${endPoint}`;

    // convert the values into JSON format
    const requestBody = JSON.stringify({
      titile: values.taskTitle,
      description: values.taskDescription,
      due_date: values.taskDueDate?.toISOString(),
    });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });

    const jsonData = await response.json();

    if (!response.ok) {
      const errorMessage = jsonData.message || "unknown error occured";
      throw new Error(errorMessage);
    }
  } catch (error) {
    handleError(error);
  } finally {
    setLoading(false);
  }
}

export default createTaskAPI;
