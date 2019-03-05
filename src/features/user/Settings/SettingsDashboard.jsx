import React from 'react'
import { Grid } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import AboutPage from './AboutPage'
import AccountPage from './AccountPage'
import BasicsPage from './BasicPage'
import PhotosPage from './PhotosPage'
import { Switch , Route , Redirect } from 'react-router-dom'
const SettingsDashboard = () =>{
return (
    
    <Grid >
        <Grid.Column width ={16} >

       </Grid.Column>
       <Grid.Column width ={16} >

       </Grid.Column>
       <Grid.Column width ={12} >
       <Switch>
           <Redirect exact from='/settings' to='/settings/basics' />
           <Route path='/settings/basics' component={BasicsPage}></Route>
           <Route path='/settings/about' component={AboutPage}></Route>
           <Route path='/settings/photos' component={PhotosPage}></Route>
           <Route path='/settings/account' component={AccountPage}></Route>

       </Switch>

       </Grid.Column>
       <Grid.Column width ={4} >
<SettingsNav></SettingsNav>
       </Grid.Column>
    </Grid>
)
}
export default SettingsDashboard