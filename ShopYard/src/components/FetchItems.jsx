import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from "../store/ItemSlice";


const FetchItems = () => {

    const fetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController()
        const signal = controller.signal
        fetch('http://localhost:8080/items', { signal })
            .then(res => res.json())
            .then(({ items }) => {
                dispatch(ItemAction.addInitialItems(items[0]))

            })

        return () => {
            controller.abort()

        }
    }, [fetchStatus])


    return (
        <>
            <div>
                FetchItems: {fetchStatus.fetchDone}
                currentlyFetching: {fetchStatus.currentlyFetching}
            </div>
        </>
    )
}

export default FetchItems