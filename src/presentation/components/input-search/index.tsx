import React from 'react'
import { Divider, Icon, IconButton, InputBase, Paper, Tooltip } from '@mui/material'
import { RecoilState, useRecoilState } from 'recoil'

type InputSearchProps = {
  id: string
  placeholder: string
  inputSearchState: RecoilState<string>
  showFiltersState: RecoilState<boolean>
  loadData: (search: string) => void
}

export const InputSearch: React.FC<InputSearchProps> = (props) => {
  const [text, setText] = useRecoilState(props.inputSearchState)
  const [showFilters, setShowFilters] = useRecoilState(props.showFiltersState)

  const handleSearch = () => {
    props.loadData(text)
  }

  return (
    <Paper
      component='form'
      onSubmit={event => { event.preventDefault() }}
      sx={{
        boxShadow: 0,
        flex: 1,
        p: '2px 4px',
        borderRadius: 2,
        mx: 2,
        mb: 1,
        display: 'flex',
        backgroundColor: 'background.default',
      }}
    >
      <IconButton type="submit" sx={{ p: '10px' }} onClick={handleSearch} aria-label="search">
        <Icon color='action'>search</Icon>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        size="small"
        value={text}
        placeholder={props.placeholder}
        onChange={(e) => setText(e.target.value)}
        inputProps={{ 'aria-label': props.placeholder, id: props.id }}
        id={props.id}
      />

      {!!props.showFiltersState && (
        <>
          <Divider sx={{ borderColor: 'grey.800' }} orientation="vertical" flexItem />

          <Tooltip title={`${showFilters ? 'Ocultar' : 'Exibir'} filtros`} arrow>
            <IconButton
              color={showFilters ? 'secondary' : 'default'}
              type="button"
              sx={{ p: '10px' }}
              aria-label="search"
              onClick={() => setShowFilters((currentState) => !currentState)}
            >
              <Icon>filter_list</Icon>
            </IconButton>
          </Tooltip>
        </>
      )}
    </Paper>
  )
}
