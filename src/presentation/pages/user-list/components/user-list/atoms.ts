import { LoadUsersResult, LoadUsersTotalizerResult } from '@/domain/usecases'
import { atom, selector } from 'recoil'

export const usersResultState = atom<LoadUsersResult>({
  key: 'usersState',
  default: null as unknown as LoadUsersResult,
})

export const loadingUsersTotalizerResultState = atom({
  key: 'loadingUsersTotalizerResultState',
  default: true,
})

export const usersTotalizerResultState = atom<LoadUsersTotalizerResult>({
  key: 'usersTotalizerState',
  default: null as unknown as LoadUsersTotalizerResult,
})

export const showFilterState = atom({
  key: 'showFilterClientsState',
  default: true
})

export const textSearchState = atom({
  key: 'textClientsSearchState',
  default: '',
})

export const clientsSearchedState = selector({
  key: 'clientsSearchedState',
  get: ({ get }) => {
    const textSearched = get(textSearchState)
    const clientResult = get(usersResultState)

    if (textSearched.trim()) {
      return clientResult?.data?.filter(client => client.name.toLowerCase().includes(textSearched.toLowerCase())) ?? []
    }

    return clientResult?.data ?? []
  }
})
