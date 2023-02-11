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
                {cart.map(({name, set, quantity, price, id}) => {
                    return (
                        <tr key={id}>
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
                    <th style={{textAlign: "end"}}>${totalPrice}</th>
                </tr>
            </tfoot>
        </table>
    )
}

export default CheckoutTable;