import SigninPage from '../../client/src/pages/SigninPage';
import EditPage from '../../client/src/pages/EditPage';
import AddPage from '../../client/src/pages/AddPage';
import AboutPage from '../../client/src/pages/AboutPage';
import HomePage from '../../client/src/pages/HomePage';
import SignupPage from '../../client/src/pages/SignupPage';
import NotFoundPage from '../../client/src/pages/NotFoundPage';
import MySettingPage from '../../client/src/pages/MySettingPage';
import Header from '../../client/src/components/template/Header';

export default [

{
    ...Header,

    routes: [
        {
            ...HomePage,
            path: '/',
            exact: true
        },

        {
            ...SigninPage,
            path: '/signin',
        },

        {
            ...SignupPage,
            path: '/signup'
        },
        
        {
            ...AddPage,
            path: '/contact/add'
        },
        
        {
            ...EditPage,
            path: '/contact/edit/:id'
        },
        
        {
            ...AboutPage,
            path: '/about/:id'
        },
        
        {
            ...MySettingPage,
            path: '/contact/setting'
        },
        
        {
            ...NotFoundPage
        }
    ]
}

];

