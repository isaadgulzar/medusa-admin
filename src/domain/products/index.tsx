import { Route, Routes } from "react-router-dom"
import Edit from "./edit"
import Overview from "./overview"
import Import from "./import"

const ProductsRoute = () => {
  return (
    <Routes>
      <Route index element={<Overview />} />
      <Route path="/:id" element={<Edit />} />
      <Route path="/import" element={<Import />} />
    </Routes>
  )
}

export default ProductsRoute
