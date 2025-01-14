import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppHeader from './ui/AppHeader'
import AppFooter from './ui/AppFooter'
import { createTheme, ThemeProvider } from '@mui/material';
import { yellow, pink } from '@mui/material/colors';
import Box from '@mui/material/Box'

import ClientesForm from './routed/ClientesForm'
import ClientesList from './routed/ClientesList'
import KarangosList from './routed/KarangosList'
import StartPage from './routed/StartPage'
const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[500]
    },
    secondary: {
      main: pink[500]
    }
  },
});

function App() {
  console.log(customTheme.palette)
  return (
      <ThemeProvider theme={customTheme}>
        
        <Box sx={{ minHeight: '100vh', backgroundColor: customTheme.palette.background.default, color: customTheme.palette.text.primary, marginBottom: '40px' }}>
        <BrowserRouter>
          <AppHeader />
          <Box component="main" sx={{ margin: '20px' }}>
            <Switch>

              {/* Menu Iniciar */}
              <Route path="/" exact>
                <StartPage />
              </Route>

              {/* Listagem de karangos */}
              <Route path="/karangos" exact>
                <KarangosList />
              </Route>

              {/* Listagem de clientes */}
              <Route path="/clientes" exact>
                <ClientesList />
              </Route>

              {/* Cadastro de novos clientes */}
              <Route path="/clientes/new">
                <ClientesForm />
              </Route>

              {/* Alteração de dados de cliente já existente */}
              <Route path="/clientes/:id">
                <ClientesForm />
              </Route>

            </Switch>
          </Box>
          <AppFooter />
        </BrowserRouter>
        </Box>
      </ThemeProvider>
  );
}

export default App;

