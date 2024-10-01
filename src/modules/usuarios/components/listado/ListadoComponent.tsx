import { ChangeEvent, Key, useEffect, useState } from "react";
import "./ListadoComponent.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Pagination,
} from "react-bootstrap";
function ListadoComponent() {
  /**
   * Listado
   */
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  /**
   * Checked
   */
  const [isChecked, setIsChecked] = useState(false);
  /**
   * Modal Editar
   */
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  /**
   * Modal Eliminar
   */
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  /**
   * Filtro
   */
  const [showFilter, setShowFilter] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const [deleteId, setDeleteId] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=2&results=10&seed=abc")
      .then((res) => res.json())
      .then(
        (result) => {
          if (result) {
            if (result.results.length !== 0) {
              setIsLoaded(true);
              setItems(result.results);
            }
          }
        },
        (error: any) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleOnChange = (id: any) => {
    let isChecked = id.target.checked;
    let isValue = id.target.value;
    console.log('ISVALUE',isValue)
  };

  const handleConfirmDelete = () => {
    handleCloseDelete();
    // setItems(pre => {
    //     const newArray = [...]
    //     console.log('newArray', newArray)
    //     return newArray;
    //     // return newArray.filter(item => item.id !== deleteId)
    // })
    console.log("eliminar usuario");
  };

  const handleCancel = () => {
    handleCloseDelete();
  };

  const filteredUsers = () => {
    const filtered = items.filter((item) => item.name.first.includes(search));
    return setItems(filtered);
  };

  const nextPage = () => {
    if (
      items.filter((item) => item.name.first.includes(search)).length >
      currentPage + 5
    ) {
      setCurrentPage(currentPage + 5);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    }
  };

  const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const listadoItems = items
      .slice(currentPage, currentPage + 5)
      .map((item) => (
        <tr key={item.id.name}>
          <th scope="row">
            {" "}
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) => handleOnChange(e)}
            />
          </th>
          <td>
            <img src={item.picture.medium} alt="" className="img-thumbnail " />
          </td>

          <td>
            {item.name.first} {item.name.last}
          </td>
          <td>{item.gender}</td>
          <td>
            {item.location.street.name} {item.location.street.number}
          </td>
          <td>{item.cell}</td>

          <td>{item.email}</td>

          <td>{item.location.country}</td>
        </tr>
      ));
    return (
      <>
        <div className="container  pt-5">
          <div className="row">
            <div className="d-flex justify-content-start align-items-center">
                <h3>Listado de usuarios</h3>
              <div className="col-sm-12 col-lg-4">
              <button
                  className="btn btn-sm btn-outline-primary px-4 "
                  id="filtrosBtn"
                  onClick={() => {
                    setShowFilter(!showFilter);
                  }}
                >
                  <i className="bi bi-sliders"></i> Filtros
            </button>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <input
                type="text"
                className="mb-2 form-control"
                placeholder="Buscar usuario"
                value={search}
                onChange={onSearchChange}
              />
              <div className="col-sm-12 col-lg-4">
                <button
                  className="btn btn-sm btn-primary px-4  btn-search"
                  onClick={filteredUsers}
                >
                  <i className="bi bi-search me-2"></i> Buscar
                </button>
              </div>
            </div>
            {showFilter ? (
              ""
            ) : (
              <div className="col-sm-12 mt-4 filtros-content">
                <div className="card border-0 shadow-sm">
                  <div className="card-body ">
                    <div className="row py-3">
                      <div className="form-group  col-sm-12 col-lg-4 ">
                        <div className="input-group ">
                          <select className="form-select form-select-sm single-select select-bs">
                            <optgroup label="NACIONALIDAD">
                              <option value="1">US</option>
                              <option value="2">AU</option>
                              <option value="3">BR</option>
                              <option value="4">CH</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className="form-group  col-sm-12 col-lg-4 ">
                        <div className="input-group ">
                          <select className="form-select form-select-sm single-select select-bs">
                            <optgroup label="GENERO">
                              <option value="1">FEMALE</option>
                              <option value="2">MALE</option>
                            </optgroup>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-4">
                        <button
                          className="btn btn-sm btn-primary px-4  btn-search"
                          onClick={filteredUsers}
                        >
                          <i className="bi bi-search me-2"></i> Buscar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="col-sm-12 pt-4">
              <div
                className="card border rounded-2 "
                style={{ background: "#f8f8f8" }}
              >
                <div
                  className="card-header py-3"
                  style={{ background: "#f8f8f8" }}
                >
                  <div className="d-flex justify-content-start align-items-center">
                    <button
                      className="btn btn-sm btn-outline-primary px-4 me-2 editar"
                      onClick={handleShowEdit}
                    >
                      <i className="bi bi-pencil"></i> Editar
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger px-4 me-2"
                      onClick={handleShowDelete}
                      id="confirmDelete"
                    >
                      <i className="bi bi-trash3"></i> Eliminar
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="dt-example">
                    <table
                      className="table table-hover table-light"
                      id="example"
                    >
                      <thead>
                        <tr>
                          <th scope="col">
                            <i className="bi bi-check-lg"></i>
                          </th>
                          <th scope="col"></th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Genero</th>
                          <th scope="col">Dirección</th>
                          <th scope="col">Teléfono</th>

                          <th scope="col">Correo electrónico</th>

                          <th scope="col">País</th>
                        </tr>
                      </thead>
                      <tbody>{listadoItems}</tbody>
                    </table>
                    <div className="d-flex justify-content-start align-items-center">
                      <button onClick={prevPage}>Anteriores</button>
                      <button onClick={nextPage}>Siguiente</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          show={showEdit}
          onHide={handleCloseEdit}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Editar Usuario</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form id="editfor p-3" className="row">
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="editNombre" className="for-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="for-control"
                  id="editNombre"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="editGenero" className="for-label">
                  Género
                </label>
                <select className="for-select" id="editGenero" required>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="editDireccion" className="htmlForm-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="for-control"
                  id="editDireccion"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="editTelefono" className="htmlForm-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="for-control"
                  id="editTelefono"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="editCorreo" className="htmlForm-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="for-control"
                  id="editCorreo"
                  required
                />
              </div>
              <div className="mb-3 col-sm-12 col-md-6">
                <label htmlFor="editPais" className="htmlForm-label">
                  País
                </label>
                <input
                  type="text"
                  className="for-control"
                  id="editPais"
                  required
                />
              </div>
              <div className="col-sm-12 mt-3">
                <button type="submit" className="btn btn-primary w-100">
                  Guardar cambios
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        <Modal
          show={showDelete}
          onHide={handleCloseDelete}
          backdrop="static"
          keyboard={false}
        >
          <ModalHeader closeButton>
            <ModalTitle>Eliminar Usuario</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>¿Estás seguro de que deseas eliminar este usuario?</p>
            <button
              type="button"
              className="btn btn-danger"
              id="confirmDelete"
              onClick={handleConfirmDelete}
            >
              Eliminar
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ListadoComponent;
