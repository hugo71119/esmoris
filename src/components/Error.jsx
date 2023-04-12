import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()


  return (
    <div id="error-page" className="d-flex justify-content-center align-items-center">
      Opps, ocurrio un error
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Regresar a la página principal</Link>
    </div>
  )
}
