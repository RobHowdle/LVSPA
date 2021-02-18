import Logo from './components/Logo';
import LogoSymbol from './components/LogoSymbol';
import Colours from './components/Colours';
import Typography from './components/Typography';
import Mascot from './components/Mascot';
import Illustrations from './components/Illustrations';
import LoadersandAnimations from './components/LoadersandAnimations';
import Wallpapers from './components/Wallpapers';
import NotFound from './components/NotFound';

export default {
    mode: 'history',

    linkActiveClass: 'font-bold',

    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/logo',
            component: Logo,
            name: 'logo'
        },

        {
            path: '/logosymbol',
            component: LogoSymbol,
            name: 'logosymbol'
        },
        {
            path: '/colors',
            component: Colours,
            name: 'colours'
        },
        {
            path: '/typography',
            component: Typography,
            name: 'typography'
        },
        {
            path: '/mascot',
            component: Mascot,
            name: 'mascot'
        },
        {
            path: '/illustrations',
            component: Illustrations,
            name: 'illustrations'
        },
        {
            path: '/loadersandanimations',
            component: LoadersandAnimations,
            name: 'loadersandanimations'
        },
        {
            path: '/wallpapers',
            component: Wallpapers,
            name: 'wallpapers'
        }
    ]
}