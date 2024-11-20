import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import paths from '../../constants/paths';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: LocalMallOutlinedIcon
    },
    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.Products,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: paths.NewProduct,
        icon: LibraryAddIcon
    }
]

export default listLinks;