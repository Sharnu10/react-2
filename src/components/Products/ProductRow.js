
function ProductRow({product}) {
    const name = <span>{product.name}</span>
    return <>
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    </>;
}

export default ProductRow;