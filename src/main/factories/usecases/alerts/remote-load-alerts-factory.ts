import { LoadAlerts } from '@/domain/usecases'
import { RemoteLoadAlerts } from '@/data/usecases'
import { makeAxiosHttpClient } from '@/main/factories/adapters'

export const makeRemoteLoadAlerts = (): LoadAlerts => {
  const apiUrl = process.env.API_URL as string
  return new RemoteLoadAlerts(apiUrl, makeAxiosHttpClient())
}
