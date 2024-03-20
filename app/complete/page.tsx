'use client'

import Image from "next/image";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Complete = () => {

    const {push} = useRouter()

    return <div className=" bg-cried h-screen flex justify-center" >
    <div className=" m-auto" >
        <div className="flex justify-center scale-150 mb-20" >
            <Image
                src={'/success.png'}
                alt=""
                width={150}
                height={150}
            />
        </div>
        <div className="flex items-center text-center justify-center uppercase" >
            <span className=" text-6xl text-block ml-10" >Спасибо за покупку!</span>
        </div>          
        <div className="flex items-center font-medium mt-7 text-center justify-center" >
            <span className=" text-xl text-block ml-10" >Ваш заказ успешно оформлен. В ближайшее время с вами свяжется наш менеджер <p/> по поводу уточнения и оплаты заказа.</span>
        </div>          
            <div className="text-center mt-10" >
                <button className="text-white bg-blue py-3 px-5 rounded-xl shadow-xl text-xl" onClick={() => push('/')} >Вернуться в магазин</button>
            </div>
        </div>
    </div> 

}

export default Complete;