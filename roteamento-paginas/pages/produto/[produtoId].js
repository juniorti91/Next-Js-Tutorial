import { useRouter } from 'next/router'

function DetalheProduto() {
    const router = useRouter()
    const produtoId = router.query.produtoId
    return <h1>Detalhes sobre o Produto {produtoId}</h1>
}

export default DetalheProduto