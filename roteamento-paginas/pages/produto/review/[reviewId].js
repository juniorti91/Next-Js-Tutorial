import { useRouter } from 'next/router'

function Review() {
    const router = useRouter()
    const { produtoId, reviewId } = router.query

    return <h1>Review {reviewId} for produto {produtoId}</h1>
}

export default Review