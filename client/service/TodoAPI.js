class TodoAPI {
  constructor() {
    this.BASEURL = "/todo";
    const requestOption = {};
  }

  getTodoList() {
    const requestOption = {};
    try {
      return fetch(this.BASEURL, requestOption)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return new Error("it is not 200~299 status");
        })
        .then((result) => result);
    } catch (error) {
      throw new Error(error);
    }
  }

  makeNewTask(task) {
    try {
      const requestOption = {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(task),
      };

      return fetch(this.BASEURL, requestOption).then((response) => {
        if (response.ok) {
          return response.json();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  moveTask({ taskId, toColumnId }) {
    const requestOption = {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ actionType: "move", toColumnId }),
    };

    return fetch(`${this.BASEURL}/${taskId}`, requestOption);
  }

  updateTask({ taskId, body }) {
    const requestOption = {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ body }),
    };

    return fetch(`${this.BASEURL}/${taskId}`, requestOption);
  }

  deleteTask(taskId) {
    try {
      const requestOption = {
        method: "DELETE",
      };

      return fetch(`${this.BASEURL}/${taskId}`, requestOption).then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default new TodoAPI();
