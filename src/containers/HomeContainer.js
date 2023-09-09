import {connect} from 'react-redux'
import Home from '../components/Home'
import { addToCart } from '../service/actions/actions'
import { removeToCart } from '../service/actions/actions'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: () => dispatch(removeToCart())
})

export  default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default Home