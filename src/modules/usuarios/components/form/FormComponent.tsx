import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function FormComponent() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button>
  
      </>
    //     <div className="modal fade" id="editModal" aria-labelledby="editModalLabel" aria-hidden="true">
    //     <div className="modal-dialog modal-dialog-centered">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="editModalLabel">Editar Usuario</h5>
    //           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //         </div>
    //         <div className="modal-body">
    //           <form id="editfor p-3" className="row">
    //             <div className="mb-3 col-sm-12 col-md-6">
    //               <label htmlFor="editNombre" className="for-label">Nombre</label>
    //               <input type="text" className="for-control" id="editNombre" required />
    //             </div>
    //             <div className="mb-3 col-sm-12 col-md-6">
    //               <label htmlFor="editGenero" className="for-label">Género</label>
    //               <select className="for-select" id="editGenero" required>
    //                 <option value="Female">Female</option>
    //                 <option value="Male">Male</option>
    //               </select>
    //             </div>
    //             <div className="mb-3 col-sm-12 col-md-6">
    //               <label htmlFor="editDireccion" className="htmlForm-label">Dirección</label>
    //               <input type="text" className="for-control" id="editDireccion" required />
    //             </div>
    //             <div className="mb-3 col-sm-12 col-md-6">
    //               <label htmlFor="editTelefono" className="htmlForm-label">Teléfono</label>
    //               <input type="text" className="for-control" id="editTelefono" required />
    //             </div>
    //             <div className="mb-3 col-sm-12 col-md-6">
    //               <label htmlFor="editCorreo" className="htmlForm-label">Correo electrónico</label>
    //               <input type="email" className="for-control" id="editCorreo" required />
    //             </div>
    //             <div className="mb-3 col-sm-12 col-md-6">
    //               <label htmlFor="editPais" className="htmlForm-label">País</label>
    //               <input type="text" className="for-control" id="editPais" required />
    //             </div>
    //             <div className="col-sm-12 mt-3">
    //                 <button type="submit" className="btn btn-primary w-100" >Guardar cambios</button>

    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
}

export default FormComponent;
