import { RemoveService } from '@/domain/usecases'
import { RemoteRemoveService } from '@/data/usecases'
import { makeAxiosHttpClient } from '@/main/factories/adapters'

export const makeRemoteRemoveService = (): RemoveService => {
  const apiUrl = process.env.API_URL as string
  return new RemoteRemoveService(apiUrl, makeAxiosHttpClient())
}
