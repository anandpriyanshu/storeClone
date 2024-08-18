import { useSelector } from "react-redux"
import HeaderItem from "../components/HeaderItem"

const Home = () => {

    const items = useSelector(store => store.items)
    console.log(items)
    return (
        <>
            <main>
                <div className="items-container">
                    <HeaderItem item={items[0]} />
                </div>
            </main>
        </>
    )
}

export default Home