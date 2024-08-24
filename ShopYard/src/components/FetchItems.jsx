import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ItemAction } from "../store/ItemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";


const FetchItems = () => {

    const fetchStatus = useSelector((store) => store.fetchStatus)
    const dispatch = useDispatch()


    useEffect(() => {
        if (!fetchStatus) return;

        const controller = new AbortController()
        const signal = controller.signal
        // dispatch(fetchStatusAction.markFetchingStarted())
        fetch("http://localhost:8080/items", { signal })
            .then((res) => res.json())
            .then(({ items }) => {
                // dispatch(fetchStatusAction.markFetchDone())
                // dispatch(fetchStatusAction.markFetchingFinished())
                dispatch(ItemAction.addInitialItems(items[0]))


            })

        return () => {
            controller.abort()

        }
    }, [fetchStatus])


    return (
        <>

        </>
    )
}

export default FetchItems