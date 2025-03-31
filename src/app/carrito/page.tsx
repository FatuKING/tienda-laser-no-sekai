export default function Carrito() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Carrito</h1>
      <p className="mt-4 text-lg">Tu carrito está vacío.</p>
      <p className="mt-2 text-sm text-gray-500">
        Agrega productos a tu carrito para verlos aquí.
      </p>
    </div>
  );
}