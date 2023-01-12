import { swalError, swalSuccess } from "../helpers/swal";

const base_url = "http://localhost:4000/api";
const access_token = localStorage.access_token;

export const fetchUsers = () => {
  return (dispatch) => {
    return fetch(`${base_url}/users`, { headers: { access_token } })
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchUsers",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const fetchTaxes = () => {
  return (dispatch) => {
    return fetch(`${base_url}/pajak`, {
      headers: { access_token },
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchTaxes",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};

export const fetchUserDetail = (id) => {
  return (dispatch) => {
    return fetch(`${base_url}/users/${id}`, { headers: { access_token } })
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchUserDetail",
          payload: data,
        })
      )
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const createUser = (obj) => {
  return (dispatch) => {
    console.log(obj);
    return fetch(`${base_url}/users`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        dispatch(fetchUsers());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses menambahkan user!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const updateUser = (id, obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/users/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json;
        dispatch(fetchUsers());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses merubah karyawan!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const deleteUser = (id) => {
  return (dispatch, getState) => {
    return fetch(`${base_url}/users/${id}`, {
      method: "delete",
      headers: { access_token },
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        return;
      })
      .then(() => {
        swalSuccess(`Sukses menghapus karyawan!`);
        dispatch(fetchUsers());
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const createTax = (obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/pajak`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        dispatch(fetchTaxes());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses menambahkan pajak!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const updateTax = (id, obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/pajak/${id}`, {
      method: "patch",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        access_token,
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json;
        dispatch(fetchTaxes());
        return res.json();
      })
      .then((data) => {
        swalSuccess(`Sukses merubah pajak!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const deleteTax = (id) => {
  return (dispatch, getState) => {
    return fetch(`${base_url}/pajak/${id}`, {
      method: "delete",
      headers: { access_token },
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        return;
      })
      .then(() => {
        swalSuccess(`Sukses menghapus pajak!`);
        dispatch(fetchTaxes());
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const login = (obj) => {
  return (dispatch) => {
    return fetch(`${base_url}/users/login`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (!res.ok) throw res.json();
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("_id", data._id);
        localStorage.setItem("name", data.name);
        dispatch({
          type: "user/login",
          payload: data,
        });
        swalSuccess(`Sukses login}!`);
      })
      .catch((err) => {
        err.then(({ message }) => swalError(message));
      });
  };
};
export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch({
      type: "user/logout",
    });
    return;
  };
};
