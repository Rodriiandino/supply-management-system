import SolicitudPage from './solicitud-page'

export default async function SolicitudDetallePage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const param = await params
  const id = param.id

  return <SolicitudPage paramId={id} />
}
