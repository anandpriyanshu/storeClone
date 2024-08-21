import { useDispatch, useSelector } from "react-redux"
import { bagAction } from "../store/bagSlice"
import { MdOutlineAdd } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
const HeaderItem = ({ item }) => {


    const dispatch = useDispatch()

    const bagItems = useSelector(store => store.bag)
    const elemnFound = bagItems.indexOf(item.id) >= 0



    const handleAddtoBag = () => {

        dispatch(bagAction.addToBag(item.id))
    }

    const handleRemove = () => {

        dispatch(bagAction.removeFromBag(item.id))
    }
    return (
        <>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>

                {elemnFound ?
                    <button type="button" className="btn btn-add-bag btn-danger" onClick={handleRemove}> <MdDeleteOutline />
                        Remove</button>
                    :
                    <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddtoBag}><MdOutlineAdd />
                        Add to Bag</button>}



            </div>
        </>
    )
}

export default HeaderItem