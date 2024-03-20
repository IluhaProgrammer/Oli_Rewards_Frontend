import { IOrder } from "@/types/order.types";
import Image from "next/image";
import { FC } from "react";
import { MdOutlineTask } from "react-icons/md";

interface IOrderCart {
    order : IOrder
}

const OrderCartItem : FC<IOrderCart>= ({order}) => {

    let mainDate = order.createdAt.slice(0, -14)

    let mainTime = order.createdAt.substr(11, 8)

    let day = mainDate.substr(9, 10)

    let sup = mainDate.slice(0, -3)

    let month = sup.substr(5, 7)

    const Months : any = {
        '01': 'января',
        '02': 'февраля',
        '03': 'марта',
        '04': 'апреля',
        '05': 'мая',
        '06': 'июня',
        '07': 'июля',
        '08': 'августа',
        '09': 'сентября',
        '10': 'октября',
        '11': 'ноября',
        '12': 'декабря',
    }

    return <div className=" border border-white border-opacity-70 rounded-xl w-2/3" >
        <div className="flex justify-between bg-white bg-opacity-70 rounded-lg px-10 py-5" >
           <span className="text-white font-semibold text-xl" >Заказ от {day} {Months[month]} </span>
        <div>
            <span>оплачено</span>
        <span className="text-white text-xl ml-1" >{order.orderItems?.reduce((acc, item) => 
             acc + item.price * item.quantity, 0
        )} Руб.</span>
        </div> 
        </div>
        <div className="flex justify-between items-start px-10 pt-5 pb-5" >
            <div className="flex flex-col" >
                <span className="text-sm font-semibold mb-5" >Доставка в пункт выдачи</span>
                <span>Время заказа: {mainTime}</span>
            </div>
            <div>
                <span className="text-9xl text-opacity-80 text-white" ><MdOutlineTask/></span>
            </div>
        </div>
        
        
    </div>
}

export default OrderCartItem;