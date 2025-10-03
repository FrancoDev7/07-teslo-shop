import { AdminTitle } from "@/admin/components/AdminTitle";
import { CustomPagination } from "@/components/Custom/CustomPagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <AdminTitle
          title="Productos"
          subtitle="Gestiona todos los productos de la tienda aquí."
        />
        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button>
              <PlusIcon />
              Agregar Producto
            </Button>
          </Link>
        </div>
      </div>
      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img
                src="https://placehold.co/250x250"
                alt="Product Image"
                className="w-20 h-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>Producto 1</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>10 Stock</TableCell>
            <TableCell>Categorio 1</TableCell>
            <TableCell>M, L, XL</TableCell>
            <TableCell className="text-right">
              <Link to={`/admin/products/t-shirt-1`}>Editar</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <CustomPagination totalPages={10} />
    </>
  );
};
