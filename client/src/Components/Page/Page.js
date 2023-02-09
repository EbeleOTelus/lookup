import React from 'react'
import { createTheme, Pagination, ThemeProvider } from '@mui/material'
import { green, purple } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

 const Page = ({ setPage, numberOfPages = 10 }) => {

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0)
  }

  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    }}
    >
      <ThemeProvider theme={theme}>
      <Pagination count={numberOfPages} onChange={(e) => handlePageChange(e.target.textContent)}
      // hideNextButton
      // hidePrevButton
      color='secondary'
      />

      </ThemeProvider>
    </div>
  )
}

export default Page;