import { DataTable } from "@/components/custom ui/DataTable"
import { columns } from "@/components/orderItems/OrderItemsColums"

const OrderDetails = async ({ params }: { params: {orderId: string }}) => {
    const res = await fetch(`http://localhost:3000/api/orders/${params.orderId}`)
    const { orderDetails, customer } = await res.json()

    console.log(orderDetails)

    const { street, city, state, postalCode, country } = orderDetails.shippingAddress

  return (
    <div className="flex flex-col p-10 gap-5">
        <p className="text-base-bold">
            ID đơn hàng: <span className="text-base-medium">{orderDetails._id}</span>
        </p>
        <p className="text-base-bold">
            Tên khách hàng: <span className="text-base-medium">{customer.name}</span>
        </p>
        <p className="text-base-bold">
            Địa chỉ đặt hàng: <span className="text-base-medium">{street}, {city}, {state}, {postalCode}, {country}</span>
        </p>
        <p className="text-base-bold">
            Tổng tiền: <span className="text-base-medium">{orderDetails.totalAmount} VND</span>
        </p>
        <p className="text-base-bold">
            Shipping rate ID: <span className="text-base-medium">{orderDetails.shippingRate}</span>
        </p>
        <DataTable columns={columns} data={orderDetails.products} searchKey="product"/>
    </div>
  )
}

export default OrderDetails