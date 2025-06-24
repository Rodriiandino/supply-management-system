import SolicitudProveedor from './solicitud-proveedor-page'

export default async function SolicitudProveedorPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const param = await params
  const id = param.id

  return <SolicitudProveedor paramId={id} />
}
