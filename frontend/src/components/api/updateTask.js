async function updateTaskAPI(
  values,
  taskId,
  handleResponse,
  handleError,
  setLoading
) {
  setLoading(true);
  try {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    const endpoint = `/task/${taskId}`;
    const url = `${baseUrl}${endpoint}`;

    const requestBody = JSON.stringify({
      title: values.title,
      description: values.taskDescription,
      due_date: values.taskDueDate?.toISOString(),
    });

    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    });

    // handle data coming from fetch
    const jsonData = await response.json();

    if (!response.ok) {
      const errorMessage = (await jsonData.message) || "Unknown Error Occured";
      throw new Error(errorMessage);
    }
    handleResponse(jsonData);
  } catch (error) {
    const errorMessaage =
      error.response?.data?.message || errorMessaage || "Unknow error";
    handleError(new Error(errorMessaage));
  } finally {
    setLoading(false);
  }
}

export default updateTaskAPI;
