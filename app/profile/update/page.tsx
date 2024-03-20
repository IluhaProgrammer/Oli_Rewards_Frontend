'use client'

import MainCatalog from "@/components/catalog/Catalog";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Button from "@/components/ui/Button";
import CatalogName from "@/components/ui/CatalogName";
import Field from "@/components/ui/Field";
import { useAppSelector } from "@/hook/useTypedSelector";
import { TypeData, UserService } from "@/services/auth/user.service";
import { IUpdateProfile } from "@/types/user.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import cn from 'clsx'

const Updaterofile = () => {

    const {push} = useRouter()

    const [isError, setIsErro] = useState<boolean>(false)

    const {theme} = useAppSelector(state => state.theme)

    const updUser = () => {
        push('/profile')
    }

    const {updateProfile} = UserService

    const { register : update, handleSubmit, formState: {errors}, reset } = useForm<TypeData>({
        mode: 'onChange'
    })

    const onSubmit : SubmitHandler<IUpdateProfile> = (data) => {
        updateProfile(data)
        setIsErro(false)
        reset()
    }

    return <div className={cn({
        'bg-white': theme === 'white',
        'bg-block': theme === 'black'
    })} >
        <div className="ml-40 mr-40 mx:mr-20 mx:ml-20 hub:mr-5 hub:ml-5 px:ml-20 px:mr-20" >
            <Header/>
            <MainCatalog/>
            <div className="mt-28">
                <div className="text-center mb-5" >
                    <CatalogName name="Редактирование" />
                </div>
                <div className="mt-2 flex w-full" >
                    <form onSubmit={handleSubmit(onSubmit)} className="m-auto" >
                        <Field {...update('email', {
                            required: 'Почта обязательна',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Только корректная почта'
                            }
                        })} placeholder="Email" error={errors.email?.message} className={cn("mb-2 px-3 py-3 border-gray", {
                            'text-block': theme === 'white',
                            'text-white': theme === 'black'
                        })} />

                        <Field {...update('name', {
                            required: 'Имя обязательно',
                            minLength: {
                                value: 2,
                                message: 'Минимум 2 символа'
                            }
                        })} placeholder="Имя" error={errors.name?.message} className= {cn("mb-2 px-3 py-3 border-gray", {
                            'text-block': theme === 'white',
                            'text-white': theme === 'black'
                        })}/>

                        <Field {...update('phone', {
                            required: 'Телефон обязателен',
                            minLength: {
                                value: 8,
                                message: 'Минимум 8 символов'
                            }
                        })} placeholder="Телефон" error={errors.phone?.message} className= {cn("mb-2 px-3 py-3 border-gray", {
                            'text-block': theme === 'white',
                            'text-white': theme === 'black'
                        })} />

                        <Field {...update('password', {
                            required: 'Пароль обязателен',
                            minLength: {
                                value: 6,
                                message: 'Минимум 6 символов'
                            }
                        })} placeholder="Пароль" error={errors.password?.message} className={cn( "mb-2 px-3 py3 border-gray", {
                            'text-block': theme === 'white',
                            'text-white': theme === 'black'
                        })} />
                        
                        <Button onClick={() => updUser()} className="m-auto" variant='dark' type='submit'>Редактировать</Button>
                        
                        <div className="mt-5 text-center" >
                            <span className={cn(" text-opacity-70", {
                                'text-block': theme === 'white',
                                'text-white': theme === 'black'
                            })} >Если у вас не работате формочка,<p/> значит пользователь с таким именем,<p/> телефоном или с таким email уже существует</span>
                        </div>
                        <div className="mt-2 text-center" >
                            <button className="text-blue text-lg" type='button' onClick={() => push('/profile')} >Вернуться назад</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Updaterofile;