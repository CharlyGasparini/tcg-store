import "./CheckoutTable.css";

const CheckoutTable = ( {cart, totalPrice} ) => {
    return (
        <table className="checkout__table" cellSpacing={0} >
            <thead>
                <tr>
                    <th  style={{borderBottom: "1px solid black"}} colSpan={2}>Order summary</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(({name, set, quantity, price}) => {
                    return (
                        <tr>
                            <td>
                                {name}({set}) x{quantity}
                            </td>
                            <td style={{textAlign: "end"}}>${quantity * price}</td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <td style={{textAlign: "end"}}>${totalPrice}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default CheckoutTable;