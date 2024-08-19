import { useSelector } from "react-redux"
import HeaderItem from "../components/HeaderItem"

const Home = () => {

    const items = useSelector(store => store.items)
    console.log(items)
    return (
        <>
            <main>
                <div className="items-container">

                    {items.map((item) => <HeaderItem key={item.id} item={item} />)}

                </div>
            </main>
        </>
    )
}

export default Home