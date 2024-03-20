'use client'

import MainCatalog from "@/components/catalog/Catalog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import OrderCartItem from "@/components/orders/OrderCartItem";
import CatalogName from "@/components/ui/CatalogName";
import { useprofile } from "@/hook/useProfile";

const Order = () => {

    const {profile} = useprofile()

    return <div>
        <div className="ml-40 mr-40" >
            <Header/>
            <MainCatalog/>
            <div className="mt-28" >
                <CatalogName name="Заказы" />
                <div className="mt-10" >
                    {
                        profile && profile.Orders?.length > 0

                        ?   profile.Orders.map(order =>
                            
                                <OrderCartItem order={order} />

                            )

                        :   <div className="text-white text-xl text-center" >Вы еще ничего не заказали :(</div>
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Order;